import axios from 'axios'
import * as Types from './actionTypes'

export const loadUserProfileData = user => dispatch => {

    dispatch({type: Types.SET_LOADING, payload: true })

    axios.get(`https://api.github.com/users/${user}`)
        .then(res => {
            console.log(res.data);
            
            dispatch(loadUserRepoData(res.data.login))
            dispatch(loadUserGistData(res.data.login))


            dispatch({type: Types.USER_PROFILE_DATA_LOADED, payload: res.data })
            dispatch({type: Types.SET_LOADING, payload: false })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
            dispatch({type: Types.SET_LOADING, payload: false })
        })
}


const loadUserRepoData = (username) => dispatch => {

    console.log("loadUserRepoData called", username);
    axios.get(`https://api.github.com/users/${username}/repos`)
        .then(res => {
            console.log(res.data);
            dispatch({type: Types.USER_REPOS_DATA_LOADED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
        })
}

const loadUserGistData = (username) => dispatch => {

    
    axios.get(`https://api.github.com/users/${username}/gists`)
        .then(res => {
            console.log(res.data);
            dispatch({type: Types.USER_GISTS_DATA_LOADED, payload: res.data })
        })
        .catch(error => {
            console.dir(error);
            dispatch({type: Types.USER_PROFILE_DATA_ERROR, payload: error.response.data })
        })
}