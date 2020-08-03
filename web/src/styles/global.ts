import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

import { colors } from './variables'

export default createGlobalStyle`
  /*Default*/
  *,
  *::before,
  *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 50%;

    @media(min-width: 1100px){
      font-size: 62.5%;
    }
  }

  html, body, #root{
    height: 100vh;
  } 

  body {
    background: ${colors.background};
  }

  #root{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body, input, button, textarea{
    font: 500 1.6rem Poppins;
  }

  .container{
    width: 90vw;
    max-width: 700px;
  }
`
