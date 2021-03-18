import {GET_ITEMS, LOGS_ERROR} from '../Actions/Types'

const initialState = {
    error: null,
    objectMovie:[]
};

export default (state = initialState, action) =>{
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state,
                objectMovie: action.payload
            }
        default:
            return state;
    }
}