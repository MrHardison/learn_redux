import React from 'react'
import PropTypes from 'prop-types'

function Page({ year, photos, getPhotos, loading }) {
  const onBtnClick = e => {
    const year = +e.target.innerText
    getPhotos(year)
  }

  return (
    <div className="ib page">
      <div>
        <button className="btn" onClick={onBtnClick}>
          2014
        </button>
        <button className="btn" onClick={onBtnClick}>
          2015
        </button>
        <button className="btn" onClick={onBtnClick}>
          2016
        </button>
        <button className="btn" onClick={onBtnClick}>
          2017
        </button>
        <button className="btn" onClick={onBtnClick}>
          2018
        </button>
        <button className="btn" onClick={onBtnClick}>
          2019
        </button>
      </div>
      <p className="page-year">{year} год</p>
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <p className="page-photo-count">У тебя {photos.length} фото</p>
      )}
    </div>
  )
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
}
export { Page }
