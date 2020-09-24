import axios from 'axios'
import store from '../redux/store'
import { pageLoading, pageLoaded } from '../actions/PageLoaderActions';
import { getStatus, clearStatus } from '../actions/StatusActions';
import { logoutUser } from '../actions/AuthActions'
import { getAuthenticationToken } from '../utils/index';
let authToken = '';
 const instance  = axios.create({
    baseURL : 'http://localhost:5000'
});
instance.interceptors.request.use(config => {
    store.dispatch(clearStatus());
    store.dispatch(pageLoading());
    return config;

}, error => {
    store.dispatch(pageLoaded());
    
});
instance.interceptors.response.use(response => {
    store.dispatch(pageLoaded());
    store.dispatch(getStatus(response.data.status,response.data.message))
    return response;
}, error => {
    store.dispatch(pageLoaded());
    if(error.response.status === 401){
        store.dispatch(getStatus(error.response.data.status,error.response.data.message))

    }
   if(error.response.status === 400){
       store.dispatch(getStatus(error.response.data.status,error.response.data.message))
   }
});
instance.defaults.headers.common['Content-Type'] = 'application/json';
authToken= getAuthenticationToken();
instance.defaults.headers.common['Authorization'] = authToken;



export default instance;