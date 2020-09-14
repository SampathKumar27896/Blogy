import { REGISTER, LOGIN,LOGOUT_SUCCESS, SET_USER, IS_AUTHENTICATED } from '../actions/Types';
import { setAuthenticationToken, setUserDetails, getUserDetails } from '../utils/index';
const initialState = {
    isAuthenticated: false,
    user: {}
}

export default function(state = initialState, action = {}){
    switch(action.type){
        case REGISTER :
            if(action.payload.token)
                setAuthenticationToken(action.payload.token);
            if(action.payload.user)
                setUserDetails(action.payload.user);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
            };
        case LOGOUT_SUCCESS :
                setAuthenticationToken(null);
                setUserDetails(null);
            return {
                ...state,
                isAuthenticated: false,
            };
        case SET_USER :
            const userDetails = getUserDetails();
            return {
                ...state,
                user : userDetails,
            };
        case IS_AUTHENTICATED : 
            return {
                ...state,
            };
        default :
            return state;
    }
}