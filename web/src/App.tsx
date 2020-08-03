import React from 'react'
import { ToastContainer } from 'react-toastify'

import Routes from './routes'
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <>
      <ToastContainer autoClose={5000} />
      <GlobalStyles />
      <Routes />
    </>
  )
}

export default App
