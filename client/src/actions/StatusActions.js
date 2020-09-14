import { GET_STATUS, CLEAR_STATUS } from './Types';


// RETURN ERRORS
export const getStatus = (status,msg) => {
  return {
    type: GET_STATUS,
    payload: { status, msg }
  };
};

// CLEAR ERRORS
export const clearStatus = () => {
  return {
    type: CLEAR_STATUS
  };
};
