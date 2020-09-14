import { PAGE_LOADING, PAGE_LOADED } from '../actions/Types';

const initialState = {
    isLoading : false
}

export default function(state = initialState, action = {}){
    switch(action.type){
        case PAGE_LOADING :
        case PAGE_LOADED :
           return {
               isLoading : action.payload.isLoading
           };
        default :
            return state;
    }
}