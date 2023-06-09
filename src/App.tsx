import { ThemeProvider } from 'styled-components'
import { Globalstyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BlogProvider } from './contexts/blogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </BrowserRouter>
      <Globalstyle />
    </ThemeProvider>
  )
}
