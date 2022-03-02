import charAPI from '../../services/charAPI';

export const REQUEST_API = 'REQUEST_API';
export const SUCCESSFUL_REQUEST = 'SUCCESSFUL_REQUEST';
export const FAILED_REQUEST = 'FAILED_REQUEST';

const requestAPI = () => ({ type: REQUEST_API });

const successfulRequest = (payload) => ({ type: SUCCESSFUL_REQUEST, payload });

const failedRequest = (error) => ({ type: FAILED_REQUEST, error });

export const fetchAPI = (name) => {
  return (dispatch) => {
    dispatch(requestAPI());
    return charAPI(name)
      .then(
        (payload) => dispatch(successfulRequest(payload)),
        (error) => dispatch(failedRequest(error.message)),
      )
  };
};