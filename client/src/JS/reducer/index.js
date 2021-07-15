import { combineReducers } from 'redux';
import authReducer from './authReducer';
import PartenaireReducer from './PartenaireReducer'
import userReducer from './userReducer';
import commentReducer from './commentReducer';
export default combineReducers({ authReducer,PartenaireReducer,userReducer,commentReducer });