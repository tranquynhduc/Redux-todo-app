import {SET_FILTER} from './ActionTypes'
import { VISIBILITY_FILTER } from './../../Contants';


const initialState=VISIBILITY_FILTER.ALL

 const visibilityFilter = (state=initialState , action) =>{
    switch(action.type){
        case SET_FILTER:{
            return action.payload.filter
        }
        default:
            return state
    }
}
export default visibilityFilter;