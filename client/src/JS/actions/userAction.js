import axios from 'axios'
import { GET_USER } from '../constants/actionTypes'
// get users
export const getusers=()=>dispatch=>{
    axios.get('http://localhost:5000/api/users/userlist')
    .then(res=>dispatch({type:GET_USER,payload:res.data}))
    .catch(err=>console.log(err))

}