import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/constants'

function getPhotos(year) {
  return dispatch => {
    // экшен с типом REQUEST (запрос начался)
    // диспатчится сразу, как будто-бы перед реальным запросом
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })
    // а экшен внутри setTimeout
    // диспатчится через секунду
    // как будто-бы в это время
    // наши данные загружались из сети
    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5]
      })
    }, 1000)
  }
}

export { getPhotos }
