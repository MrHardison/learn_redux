import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL
} from '../constants/constants'

const initialState = {
  year: 2019,
  photos: [],
  loading: false,
  error: ''
}

export function pageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: payload, loading: true, error: '' }

    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: payload, loading: false }

    case GET_PHOTOS_FAIL:
      return { ...state, loading: false, error: payload.message }

    default:
      return state
  }
}
