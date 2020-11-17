import axios from 'axios'
import * as Types from './actionTypes'

export const loadUserProfileData = user => dispatch => {

    dispatch({type: Types.SET_LOADING, payload: true })

    axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
            console.log(res.data);
            dispatch({type: Types.USER_PROFILE_DATA_LOADED, payload: res.data })
            dispatch({type: Types.SET_LOADING, payload: false })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
            dispatch({type: Types.SET_LOADING, payload: false })
        })
}