import { REGISTER,SET_USER, LOGOUT_SUCCESS, IS_AUTHENTICATED, LOGIN_SUCCESS} from './Types';
import axiosConfig from './../config/axios';
import {  getUserDetails,getAuthenticationToken } from '../utils/index';

export const  registerUser = registerData => async dispatch => {
     
    try{
        const response = await axiosConfig.post('/register',registerData)
        if(response.data.token){
            axiosConfig.defaults.headers.common['Authorization'] = response.data.token;
        }
        dispatch({
            type: REGISTER,
            payload : response.data
        });
        if(response.data.user){
            dispatch({
                type: SET_USER,
                payload : response.data.user
            });
        }
        console.log(response)
    }catch(error){
        console.log("from register error ")
    }

};

export const  loginUser = registerData => async dispatch => {
     
    try{
        const response = await axiosConfig.post('/login',registerData)
        if(response.data.token){
            axiosConfig.defaults.headers.common['Authorization'] = response.data.token;
        }
        dispatch({
            type: LOGIN_SUCCESS,
            payload : response.data
        });
        if(response.data.user){
            dispatch({
                type: SET_USER,
                payload : response.data.user
            });
        }
    }catch(error){
        console.log(error.message)
    }

};

export const logoutUser = () => async dispatch => {
    try{
        const response = await axiosConfig.post('/logout')
        dispatch({
            type: LOGOUT_SUCCESS
        });
    }catch(e){
        console.log(e.message);
    }
}

export const  getUser = () => async dispatch => {
     
    try{
        let user = getUserDetails();
        if(user){
            dispatch({
                type: SET_USER,
                payload : user
            });
        }
    }catch(error){
        console.log("from get user error")
    }

};

export const  isUserAuthenticated = () => async dispatch => {

    try{
        const token = getAuthenticationToken();
        dispatch({
            type: IS_AUTHENTICATED,
            payload : token,
        });
        
    }catch(error){
        console.log("from get user error")
    }

};