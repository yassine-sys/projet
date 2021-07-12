import { GET_USER } from "../constants/actionTypes"

const initState={
    users:[]
}
export const userReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_USER:return{
            ...state,
            users:action.payload.user
        }
        default: return state

    }
}
export default userReducer