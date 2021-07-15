import { GET_COMMENTS } from "../constants/actionTypes"

const initState={
    comments:[]
}
export const commentReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_COMMENTS : return {
            ...state,
            comments:action.payload

        }
        default: return state
    }
}

export default commentReducer
