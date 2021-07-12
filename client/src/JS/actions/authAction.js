import axios from 'axios';
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

//Set the parent loading
const parentLoading = () => (dispatch) => {
  dispatch({
    type: PARENT_LOADING,
  });
};
//Set the partenaire loading
const partenaireLoading = () => (dispatch) => {
    dispatch({
        type: PARTENAIRE_LOADING
    })
}

// Register partenaire
export const registerPartenaire = (formData) => async (dispatch) => {
    dispatch(partenaireLoading)
    try {
        const res = await axios.post('http://localhost:5000/api/partenaire/register' , formData)
        dispatch({
            type:REGISTER_PARTENAIRE,
            payload:res.data
        })
        
    } catch (error) {
        console.log(error)
        
    console.dir(error);
    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  
        
    }
}

// Register parent
export const registerParent = (formData) => async (dispatch) => {
  dispatch(parentLoading());
  try {
    const res = await axios.post('http://localhost:5000/api/users/register', formData);
    dispatch({
      type: REGISTER_PARENT,
      payload: res.data, // { msg: 'User registred with success', user, token }
    });
  } catch (error) {
    console.log(error);
    
    console.dir(error);
    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Login partenaire
export const loginPartenaire = (formData) => async (dispatch) => {
    dispatch(partenaireLoading())
    try {
        const res = await axios.post('http://localhost:5000/api/partenaire/login' , formData)
        dispatch({
            type:LOGIN_PARTENAIRE,
            payload:res.data
        })
        
    } catch (error) {
        console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
        
    }
}

// Login parent
export const loginParent = (formData) => async (dispatch) => {
  dispatch(parentLoading());

  try {
    const res = await axios.post('http://localhost:5000/api/users/login', formData);
    dispatch({
      type: LOGIN_PARENT,
      payload: res.data, // { msg: 'Logged in with success', user, token }
    });
  } catch (error) {
    console.dir(error);

    const { errors, msg } = error.response.data;

    if (Array.isArray(errors)) {
      errors.forEach((err) => alert(err.msg));
    }
    console.log(errors);
    if (msg) {
      alert(msg);
    }

    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

// Get auth parent
export const getAuthParent = () => async (dispatch) => {
  dispatch(parentLoading());

  try {
    //headers
    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    };
    const res = await axios.get('http://localhost:5000/api/users/user', config);
    dispatch({
      type: GET_AUTH_PARENT,
      payload: res.data, // {user: req.user}
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: AUTH_ERRORS,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_PARENT,
  });
};