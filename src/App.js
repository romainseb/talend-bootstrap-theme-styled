import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { AppHeader } from './components/AppHeader.component'
import { Logo } from './components/Logo.component'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppHeader>
        <Logo />
        test
      </AppHeader>
    </ThemeProvider>
  )
}

export default App
