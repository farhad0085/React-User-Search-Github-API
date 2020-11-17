import * as Types from '../actions/actionTypes'

const initialState = {
    loading: false,
    user: {},
    errors: {},
    repos: [],
    gists: []
}

function rootReducer(state = initialState, action) {
    switch (action.type) {

        case Types.USER_PROFILE_DATA_LOADED: {
            return {
                ...state,
                user: action.payload,
                errors: {}
            }
        }

        case Types.USER_PROFILE_DATA_ERROR: {
            return {
                ...state,
                errors: action.payload
            }
        }

        
        case Types.USER_REPOS_DATA_LOADED: {
            return {
                ...state,
                repos: action.payload
            }
        }

        case Types.USER_GISTS_DATA_LOADED: {
            return {
                ...state,
                gists: action.payload
            }
        }

        

        case Types.SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }

        default: return state
    }
}

export default rootReducer