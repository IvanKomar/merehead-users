import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'
import { Spinner } from './components'
import { UsersPage, UserPage } from './pages'
import './App.css'


function App() {
  return (
    <>
      <BrowserRouter>
        <Layout style={{ margin: '30px' }}>
          <Switch>
            <Route
              path={'/'}
              exact
              name="users"
              component={UsersPage}
            />
            <Route
              path={'/user/:id'}
              name="user"
              component={UserPage}
            />
          </Switch>
          <Spinner />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
