import React, { useState, useEffect } from 'react'
import api from './api'
import 'bootstrap/dist/css/bootstrap.css'
import MainPage from './components/mainPage'
import Bookmark from './components/bookmark'
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/navBar'

const App = () => {
  const [persons, setPersons] = useState()
  useEffect(() => {
    api.persons.fetchAll().then((data) => setPersons(data))
  }, [])

  console.log(persons)
  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => {
            return persons && <MainPage persons={persons} {...props} />
          }}
        />
        <Route
          path="/Bookmark"
          render={(props) => {
            return (
              <Bookmark
                persons={persons && persons.filter((person) => person.bookmark === true)}
                {...props}
              />
            )
          }}
        />
      </Switch>
    </div>
  )
}

export default App
