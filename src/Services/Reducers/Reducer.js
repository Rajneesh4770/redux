import {Add_To_Cart} from '../Constant'
const initialState ={
    cardData:[]
}
export default function cardItem(state=initialState,action){
    switch(action.type){
        case Add_To_Cart:
            console.log('reducer',action)
            return{
                ...state,
                cardData:action.data
            }
            // break;
            default:
                return state
    }
}