import { GET_PARTENAIRE } from "../constants/actionTypes"

const initState={
    partenaires:[]
}
export const PartenaireReducer=(state=initState,action)=>{
    switch(action.type){
        case GET_PARTENAIRE:return {
            ...state,
            partenaires:action.payload.partenaire
        }
        default: return state

    }
} 
export default PartenaireReducer