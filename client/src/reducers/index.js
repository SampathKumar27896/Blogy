import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import statusReducer from './StatusReducer';
import PageLoaderReducer from './PageLoaderReducer';
import PostReducer from './PostReducer';

export default combineReducers({
  Auth: AuthReducer,
  Status : statusReducer,
  PageLoader : PageLoaderReducer,
  Post : PostReducer
});
