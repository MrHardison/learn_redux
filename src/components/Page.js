import React from 'react'
import PropTypes from 'prop-types'

function Page({ year, photos, setYear }) {
  const onBtnClick = e => {
    const year = +e.target.innerText
    setYear(year)
  }

  return (
    <div>
      <div>
        <button onClick={onBtnClick}>2014</button>
        <button onClick={onBtnClick}>2015</button>
        <button onClick={onBtnClick}>2016</button>
        <button onClick={onBtnClick}>2017</button>
        <button onClick={onBtnClick}>2018</button>
      </div>
      <p>
        You have {photos.length} photos by {year} year
      </p>
    </div>
  )
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  setYear: PropTypes.func.isRequired
}
export { Page }
