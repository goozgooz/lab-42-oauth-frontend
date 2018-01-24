/* global __API_URL__ */

import superagent from 'superagent';
import cookie from 'react-cookies';

export const validate = () => (dispatch) => {
    let token = cookie.load('X-BBB-Token');
    if(token) dispatch(loginAction());
}

export const login = (user) => (dispatch) => {
    dispatch(loginAction());
}

export const logout = () => (dispatch) => {
    cookie.remove('X-BBB-Token');
    dispatch(logoutAction());
}

const loginAction = (user) => ({
    type: "LOGIN",
    payload: user
})

const logoutAction = () => ({
    type: 'LOGOUT',
})