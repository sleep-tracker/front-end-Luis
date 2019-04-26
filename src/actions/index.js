import axios from 'axios';
import axiosWithAuth from '../utils/authAxios'
import {initialState} from '../reducers'

export const SENDING_CRED = 'SENDING_CRED'
export const SENDING_CRED_SUCCESS = 'SENDING_CRED_SUCCESS'
export const SENDING_CRED_FAIL = 'SENDING_CRED_FAIL'

export const REG_START = 'REG_START'
export const REG_SUCCESS = 'REG_SUCCESS'
export const REG_FAIL = 'REG_FAIL'

export const FETCH_START = 'FETCH_START'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'

export const OPT_START = 'OPT_START'
export const OPT_SUCCESS = 'OPT_SUCCESS'
export const OPT_FAIL = 'OPT_FAIL'

export const USER_START = 'USER_START'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAIL = 'USER_FAIL'

export const POST_START = 'POST_START'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAIL = 'POST_FAIL'

export const DELETE_ITEM = 'DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const PASSING = 'PASSING'

export const PUT_START = 'PUT_START'
export const PUT_SUCCESS = 'PUT_SUCCESS'
export const PUT_FAIL = 'PUT_FAIL'

export const INFO_START = 'INFO_START'
export const INFO_SUCCESS = 'INFO_SUCCESS'
export const INFO_FAIL = 'INFO_FAIL'

export const sendingCred = (cred) => dispatch =>  {
    dispatch({
        type: SENDING_CRED,
    })

    return axios
    .post("https://build-week-sleep-tracker.herokuapp.com/api/auth/login", cred)
    .then(res => {
        localStorage.setItem("token", res.data.token)
        dispatch({
            type: SENDING_CRED_SUCCESS,
            payload: res.data,
        })

    })
    .catch(err => {
        dispatch({
            type: SENDING_CRED_FAIL,
            payload: err,
        })
    })
}


export const registerUser = (cred) => dispatch =>  {
    dispatch({
        type: REG_START,
    })

    return axios
    .post("https://build-week-sleep-tracker.herokuapp.com/api/auth/register", cred)
    .then(() => {
        dispatch({
            type: REG_SUCCESS,
        })
    })
    .catch(err => {
        dispatch({
            type: REG_FAIL,
            payload: err,
        })
    })
}


export const getItems = () => dispatch => {
    dispatch({
        type: FETCH_START,
    })

    axiosWithAuth()
    .get(`https://build-week-sleep-tracker.herokuapp.com/api/users/chart/data`)
    .then(res => {
        dispatch({
            type: FETCH_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => {
        dispatch({
            type: FETCH_FAIL,
            payload: err,
        })
    })
}

export const opt = () => dispatch => {
    dispatch({
        type: OPT_START,
    })

    axiosWithAuth()
    .get(`https://build-week-sleep-tracker.herokuapp.com/api/users/average`, initialState.users)
    .then(res => {
        dispatch({
            type: OPT_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => {
        dispatch({
            type: OPT_FAIL,
            payload: err,
        })
    })
}

export const getUsers = (id) => dispatch => {
    dispatch({
        type: USER_START,
    })

    axios
    .get(`https://usemytechstuff.herokuapp.com/api/users/${id}`)
    .then(res => {
        dispatch({
            type: USER_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => {
        dispatch({
            type: USER_FAIL,
            payload: err,
        })
    })
}

export const postListing = (listing) => dispatch => {
    dispatch({
        type: POST_START,
    })
    axiosWithAuth()
    .post(`https://build-week-sleep-tracker.herokuapp.com/api/users/data/add`, listing)
    .then(res => {
        dispatch({
            type: POST_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => {
        dispatch({
            type: POST_FAIL,
            payload: err,
        })
    })
}


export const deleteItem = (id) => dispatch => {
    dispatch({ type: DELETE_ITEM })

    axiosWithAuth()
        .delete(`https://build-week-sleep-tracker.herokuapp.com/api/users/data/delete/${id}`)
        .then(() => {
            dispatch({ type: DELETE_ITEM_SUCCESS })
        })
        .then(() => { axiosWithAuth()
            .get(`https://build-week-sleep-tracker.herokuapp.com/api/users/chart/data`)
            .then(res => {
                dispatch({
                    type: FETCH_SUCCESS,
                    payload: res.data,
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_FAIL,
                    payload: err,
                })
            })})
        .catch(err => {
            dispatch({ type: DELETE_ITEM_FAILURE, payload: err })
        })
}

export const passItem = item => {
   
    return ({
        type: PASSING,
        payload: item
    })

}

export const editPost = (edit) => dispatch => {

    dispatch({
        type: PUT_START,
    })

    return axiosWithAuth()
    .patch(`https://build-week-sleep-tracker.herokuapp.com/api/users/data/edit/${edit.id}`, edit)
    .then(res => {
        dispatch({
            type: PUT_SUCCESS,
            payload: res.data,
        })
    })
    .then(() =>  { axiosWithAuth()
        .get(`https://build-week-sleep-tracker.herokuapp.com/api/users/chart/data`)
        .then(res => {
            dispatch({
                type: FETCH_SUCCESS,
                payload: res.data,
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAIL,
                payload: err,
            })
        })})
    .catch(err => {
        dispatch({
            type: PUT_FAIL,
            payload: err,
        })
    })
}

export const getUserInfo = () => dispatch => {
    dispatch({
        type: INFO_START,
    })

    axiosWithAuth()
    .get(`https://build-week-sleep-tracker.herokuapp.com/api/users`)
    .then(res => {
        dispatch({
            type: INFO_SUCCESS,
            payload: res.data,
        })
    })
    .catch(err => {
        dispatch({
            type: INFO_FAIL,
            payload: err,
        })
    })

}