import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS } from '../constants/constants'

const initialState = {
  year: 2018,
  photos: [],
  loading: false
}

export function pageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, loading: true }
    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, loading: false }
    default:
      return state
  }
}
