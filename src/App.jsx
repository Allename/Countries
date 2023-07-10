import axios from 'axios'
import { useEffect } from 'react'
import Header from './components/Header'
import { GlobalStyle } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './constants/theme'
import Home from './components/Home'

function App({countries, currentCountries}) {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div>
        <Home/>
      </div>
    </ThemeProvider>
  )
}

export default App