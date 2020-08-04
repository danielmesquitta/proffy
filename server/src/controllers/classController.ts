import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinutes'

export default {
  async store(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    }: {
      name: string
      avatar: string
      whatsapp: string
      bio: string
      subject: string
      cost: number
      schedule: { week_day: number; from: string; to: string }[]
    } = req.body

    const trx = await db.transaction()

    try {
      const [user_id] = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })

      const [class_id] = await trx('classes').insert({
        user_id,
        subject,
        cost,
      })

      const classSchedule = schedule.map(({ week_day, from, to }) => ({
        class_id,
        week_day,
        from: convertHourToMinutes(from),
        to: convertHourToMinutes(to),
      }))

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return res.status(201).send()
    } catch (err) {
      await trx.rollback()
      return res.status(400).json({ error: err })
    }
  },

  async index(req: Request, res: Response) {
    const {
      week_day,
      subject,
      time,
    }: {
      week_day?: string
      subject?: string
      time?: string
    } = req.query

    if (!week_day || !subject || !time) {
      return res
        .status(400)
        .json({ error: 'Missing filters to search classes' })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')

          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])

          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*'])

    res.status(200).json(classes)
  },
}
