import { GlobalStyle } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './constants/theme'
import Home from './Home'

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