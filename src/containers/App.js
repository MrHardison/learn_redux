import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { setYear } from '../actions/PageActions'

import '../App.css'

function App({ page, user, setYearAction }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
      <p className="App-intro">Здесь будут мои самые залайканные фото</p>
      <User name={user.name} />
      <Page year={page.year} photos={page.photos} setYear={setYearAction} />
    </div>
  )
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setYearAction: year => {
      dispatch(setYear(year))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
