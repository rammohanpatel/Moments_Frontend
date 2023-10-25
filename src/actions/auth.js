import {AUTH} from '../constants/actionTypes';

import * as api from "../api/index.js";

export const signin =(form,navigate)=> async (dispatch)=>{
    try {
        const {data} = await api.SignIn(form);
        dispatch({type:AUTH, data});
        navigate.push('/');
    } catch (error) {
        console.log(error);
    }
}

export const signup =(form,navigate)=> async (dispatch)=>{
    try {
        const {data} = await api.SignUp(form);
        dispatch({type:AUTH, data});
        navigate.push('/');
    } catch (error) {
        console.log(error);
    }
}
