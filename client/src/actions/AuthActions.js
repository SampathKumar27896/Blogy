import { REGISTER,SET_USER, LOGOUT_SUCCESS, IS_AUTHENTICATED} from './Types';
import axiosConfig from './../config/axios';
import {  getUserDetails } from '../utils/index';

export const  registerUser = registerData => async dispatch => {
     
    try{
        const response = await axiosConfig.post('/register',registerData)
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
        dispatch({
            type: IS_AUTHENTICATED,
        });
        
    }catch(error){
        console.log("from get user error")
    }

};