import axios from 'axios'
import { GET_COMMENTS, UPDATE_PARTENAIRE } from '../constants/actionTypes'
import { editPartenaire } from './partenaireAction'


//get
export const getComments=()=>dispatch=>{
    axios.get('http://localhost:5000/api/commentaire/list-comment')

    .then(res=>dispatch({type:GET_COMMENTS,payload:res.data})
    )
    .catch(err=>console.log(err))
}
// ajouter commentaire
export const createComments=({partenaire,newComment})=>async dispatch=>{
  //headers
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };   
  const newPartenaire = {...partenaire,comments: [...partenaire.comments, newComment]}
  // dispatch({type:editPartenaire(),payload:newPartenaire})
  try {
    const data={...newComment,partenaireId:partenaire._id}
    console.log(data)
    const res=await axios.post('http://localhost:5000/api/commentaire/comment',data,config)
    const newData={...res.data.newComment}
    const newPartenaire={...partenaire,comments:[newComment,newData]}
    console.log(newData)
    dispatch({type:getComments(),payload:newPartenaire})
    
  } catch (err) {
    err=>console.log(err)
  }
}
//add comment
export const addComments = (newComment) => (dispatch) => {
  //headers
  const config = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };
  axios.post('http://localhost:5000/api/commentaire/add-comment', newComment, config)
    .then(res => dispatch(getComments()))
    .catch(err => console.log(err))
}


