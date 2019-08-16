import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { Page } from '../components/Page'
import { getPhotos } from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions'

import '../index.css'

function App({ page, user, getPhotosAction, handleLoginAction }) {
  return (
    <div className="app">
      <Page
        photos={page.photos}
        year={page.year}
        getPhotos={getPhotosAction}
        loading={page.loading}
        error={page.error}
      />
      <User
        name={user.name}
        loading={user.loading}
        error={user.error}
        handleLogin={handleLoginAction}
      />
    </div>
  )
}

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page
  }
}
const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
  handleLoginAction: () => dispatch(handleLogin())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
