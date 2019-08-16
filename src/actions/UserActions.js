import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from '../constants/constants'

export function handleLogin() {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST
    })
    //eslint-disable-next-line no-undef
    VK.Auth.login(res => {
      console.log(res)
      if (res.session) {
        let username = res.session.user.first_name
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username
        })
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации')
        })
      }
    }, 4) // запрос прав на доступ к photo
  }
}
