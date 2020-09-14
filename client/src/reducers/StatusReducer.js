import { GET_STATUS, CLEAR_STATUS } from '../actions/Types';


const initialState = {
  status: null,
  msg: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STATUS:
      
      return {
        status: action.payload.status,
        msg: action.payload.msg
      };
    case CLEAR_STATUS:
      return {
        status: null,
        msg: {},
      };
    default:
      return state;
  }
}
