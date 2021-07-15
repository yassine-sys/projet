import axios from 'axios'
import { GET_PARTENAIRE } from '../constants/actionTypes'
//get
export const getPartenaire=()=>dispatch=>{
    axios.get('http://localhost:5000/api/partenaire/partenairelist')
    .then(res=>dispatch({type:GET_PARTENAIRE,payload:res.data}))
    .catch(err=>console.log(err))

}

export const editPartenaire = (idPartenaire, editedPartenaire) => (dispatch) => {
    const config = {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      };
    axios
      .put(`http://localhost:5000/api/partenaire/update/${idPartenaire}`, editedPartenaire,config)
      .then((res) => dispatch(getPartenaire()))
      .catch((err) => console.log(err));
  };