import {
    PARENT_LOADING,
    LOGIN_PARENT,
    REGISTER_PARENT,
    LOGOUT_PARENT,
    GET_AUTH_PARENT,
  AUTH_ERRORS,
  PARTENAIRE_LOADING,
  REGISTER_PARTENAIRE,
  LOGIN_PARTENAIRE,
} from '../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'), //null
    user: null,
    isAuth: false,
    isLoading: true,
    msg: null,
  };
  
export  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case PARENT_LOADING:
      case PARTENAIRE_LOADING:    
        return {
          ...state,
          isLoading: true,
        };
      case REGISTER_PARENT:
      case REGISTER_PARTENAIRE:    
      case LOGIN_PARENT:
      case LOGIN_PARTENAIRE:    
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          msg: payload.msg,
          ...payload,
        };
      case GET_AUTH_PARENT:
        return {
          ...state,
          isLoading: false,
          isAuth: true,
          ...payload,
        };
      case AUTH_ERRORS:
      case LOGOUT_PARENT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuth: false,
          user: null,
          isLoading: false,
        };
      default:
        return state;
    }
  };
  
export default authReducer