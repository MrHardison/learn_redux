import React from 'react'
import PropTypes from 'prop-types'

function User({ name, loading, handleLogin, error }) {
  const renderUserUI = () => {
    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }
    if (loading) {
      return <p>Загружаю...</p>
    }
    if (name) {
      return <div className="ib user">Привет, {name}!</div>
    } else {
      return (
        <button className="btn" onClick={handleLogin}>
          Войти
        </button>
      )
    }
  }
  return <div>{renderUserUI()}</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleLogin: PropTypes.func.isRequired
}
export { User }
