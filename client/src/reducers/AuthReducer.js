import { REGISTER, LOGIN,LOGOUT_SUCCESS, SET_USER, IS_AUTHENTICATED, LOGIN_SUCCESS } from '../actions/Types';
import { setAuthenticationToken, setUserDetails, getUserDetails } from '../utils/index';
const initialState = {
    isAuthenticated: false,
    redirect: false,
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
                redirect: true,
                isAuthenticated: true,
            };
            break;
        case LOGIN_SUCCESS :
            if(action.payload.token)
                setAuthenticationToken(action.payload.token);
            if(action.payload.user)
                setUserDetails(action.payload.user);
            return {
                ...state,
                ...action.payload,
                redirect: true,
                isAuthenticated: true,
            };
            break;
        case LOGOUT_SUCCESS :
                setAuthenticationToken(null);
                setUserDetails(null);
            return {
                ...state,
                isAuthenticated: false,
            };
            break;
        case SET_USER :
            const userDetails = getUserDetails();
            return {
                ...state,
                user : userDetails,
            };
            break;
        case IS_AUTHENTICATED : 
            
            return {
                ...state,
                isAuthenticated: (action.payload !== 'null')? true : false
            };
            break;
        default :
            return state;
    }
}