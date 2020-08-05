import { Request, Response } from 'express'

import db from '../database/connection'

export default {
  async store(req: Request, res: Response) {
    const { user_id }: { user_id: number } = req.body
    await db('connections').insert({
      user_id,
    })
    return res.status(201).send()
  },

  async index(req: Request, res: Response) {
    const [{ total }] = await db('connections').count('* as total')
    return res.json({ total })
  },
}
