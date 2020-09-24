
import axiosConfig from './../config/axios';
import { GET_POSTS } from './Types';

export const  getPosts = () => async dispatch => {
    
    try{
        const response = await axiosConfig.get('/posts')
        
        dispatch({
            type: GET_POSTS,
            payload : response.data
        });
    }catch(error){
        console.log("heeel")
    }

};