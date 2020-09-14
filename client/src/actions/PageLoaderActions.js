import { PAGE_LOADING, PAGE_LOADED } from './Types';

export const pageLoading = () => dispatch => {
        dispatch({
            type: PAGE_LOADING,
            payload : { isLoading : true}
        });
};

export const pageLoaded = () => dispatch => {
    dispatch({
        type: PAGE_LOADED,
        payload : { isLoading : false}
    });
};