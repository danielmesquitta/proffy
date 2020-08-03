import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/study" component={TeacherList} />
        <Route path="/teach" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
