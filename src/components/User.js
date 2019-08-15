import React from 'react'
import PropTypes from 'prop-types'

function User({ name }) {
  return <div>Hello, {name}!</div>
}

User.propTypes = {
  name: PropTypes.string.isRequired
}
export { User }
