/* global __API_URL__ */
import superagent from 'superagent';
import cookie from 'react-cookes';

export const updateProfile = (user) => (dispatch) => {
    dispatch(updateAction(user));
}


const updateAction = (user) => ({
    type: 'UPDATE_PROFILE',
    payload: user 
})