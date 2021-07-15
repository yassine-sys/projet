import React,{useState} from 'react'
import { useDispatch } from "react-redux";
import { addComments, createComments } from '../JS/actions/commentsAction';


const Commentaire = ({partenaire}) => {
    const [contenu, setContenu] = useState('');
         
        
     const dispatch = useDispatch();
    
    const handleComment = () => {

    //   const newComment = { contenu };
     
      dispatch(createComments({contenu,partenaire}));
    
    
      setContenu('');
    
    }
    return (
        <div>
            
          <input type='text' placeholder='add comment...' value={contenu} onChange={e=>setContenu(e.target.value)}>
                    
                        </input>
            <button onClick={handleComment}>ajouter </button>

            
        </div>
    )
}

export default Commentaire
