import React from 'react'
import { connect } from 'react-redux'
import './App.css'

function App({page, user}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Мой топ фото</h1>
      </header>
      <p className="App-intro">Здесь будут мои самые залайканные фото</p>
      <p>
        Привет, {user.name}!
      </p>
      <p>У тебя {page.photos.length} фото за {page.year} год</p>
    </div>
  )
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page
  }
}
export default connect(mapStateToProps)(App)
