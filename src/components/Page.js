import React from 'react'
import PropTypes from 'prop-types'

function Page({ year, photos, getPhotos, loading, error }) {
  const onBtnClick = e => {
    const year = +e.target.innerText
    getPhotos(year)
  }
  const renderPage = () => {
    if (error) {
      return <p className="error">Во время загрузки фото произошла ошибка</p>
    }
    if (loading) {
      return <p>Загрузка...</p>
    } else {
      return photos.map((entry, index) => (
        <div key={entry.id} className="photo">
          <p>
            <img src={entry.sizes[0].url} alt="" />
          </p>
          <p>{entry.likes.count} ❤</p>
        </div>
      ))
    }
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
      <p className="page-year">
        {year} год [{photos.length}]
      </p>
      {renderPage()}
    </div>
  )
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
}
export { Page }
