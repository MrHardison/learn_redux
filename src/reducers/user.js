import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../constants/constants'

const initialState = {
  name: '',
  error: '', // добавили для сохранения текста ошибки
  loading: false // добавили для реакции на статус "загружаю" или нет
}

export function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: '' }

    case LOGIN_SUCCESS:
      return { ...state, loading: false, name: payload }

    case LOGIN_FAIL:
      return {...state, loading: false, error: payload.message}

    default:
      return state
  }
}
