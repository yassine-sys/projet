import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComments } from '../JS/actions/commentsAction'
import CommentaireCard from './CommentaireCard'

const CommentaireList = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getComments())
    },[])

    const commentaires = useSelector(state=>state.commentReducer.comments)
    

    return (
        <div>
            {commentaires && commentaires.map((commentaire)=>(
            <CommentaireCard key={commentaire._id} commentaire={commentaire} />))}
            
        </div>
    )
}

export default CommentaireList
