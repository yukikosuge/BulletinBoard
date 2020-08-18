import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import PageHome from './PageHome'
import PageNotFound from './PageNotFound'
import PageThread from './PageThread'


const App = () => {
  const theme = createMuiTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path={'/'}>
            <PageHome />
          </Route>

          <Route exact path={'/threads/:threadId'}>
            <PageThread />
          </Route>

          <Route path={'*'}>
            <PageNotFound />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App