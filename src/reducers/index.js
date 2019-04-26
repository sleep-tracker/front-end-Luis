import {SENDING_CRED, SENDING_CRED_SUCCESS, SENDING_CRED_FAIL, FETCH_START, FETCH_SUCCESS, FETCH_FAIL, INFO_START, INFO_SUCCESS, INFO_FAIL, POST_START, POST_FAIL, POST_SUCCESS, DELETE_ITEM,DELETE_ITEM_FAILURE,DELETE_ITEM_SUCCESS, PASSING, PUT_START, PUT_FAIL,PUT_SUCCESS, REG_START, REG_SUCCESS, REG_FAIL, OPT_START, OPT_SUCCESS, OPT_FAIL} from '../actions'

export const initialState = {
    tech: [],
    fetching: false,
    sending_login_creds: false,
    auth: {
        token: '',
        user_id: '',
        message: '',
        user_name: '',
    },
    bestSleep: '',
    users: {
        id: '',
        email: '',
        name: '',
        lastName: '',
        age: '',
    },
    err: '',
    
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case SENDING_CRED:
            return({
                ...state,
                sending_login_creds: true,
            })
        case SENDING_CRED_SUCCESS:
            return({
                ...state,
                sending_login_creds: false,
                auth: action.payload,
            })
        case SENDING_CRED_FAIL:
            return({
                ...state,
                sending_login_creds: false,
                err: action.payload,
            })
        case REG_START:
        return({
            ...state,
        })
        case REG_SUCCESS:
        return({
            ...state,
        })
        case REG_FAIL:
        return({
            ...state,
            err: action.payload
        })
        case OPT_START:
            return({
                ...state,
                opting: true,
            })
        case OPT_SUCCESS:
            return({
                ...state,
                opting: false,
                bestSleep: action.payload,
            })
        case OPT_FAIL:
            return({
                ...state,
                opting: false,
                err: action.payload,
            })
        case FETCH_START:
            return({
                ...state,
                fetching: true,
            })
        case FETCH_SUCCESS:
            return({
                ...state,
                fetching: false,
                tech: action.payload,
            })
        case FETCH_FAIL:
            return({
                ...state,
                fetching: false,
                err: action.payload,
            })
        case INFO_START:
            return({
                ...state,
                gettingUser: true,
            })
        case INFO_SUCCESS:
            return({
                ...state,
                gettingUser: false,
                users: { ...state.users,
                    ...action.payload[0]},
            })
        case INFO_FAIL:
            return({
                ...state,
                gettingUser: false,
                err: action.payload,
            })
        case POST_START:
            return({
                ...state,
                posting: true,
            })
        case POST_SUCCESS:
            return({
                ...state,
                posting: false,
                tech: [...state.tech, {...action.payload}],
            })
        case POST_FAIL:
            return({
                ...state,
                posting: false,
                err: action.payload,
            })
        case DELETE_ITEM:
            return {
                ...state,
                deletingItem: true,
                error: null
            }
        case DELETE_ITEM_SUCCESS:
            return {
                ...state,
                deletingItem: false,
                error: null
            }
        case DELETE_ITEM_FAILURE:
            return {
                ...state,
                deletingItem: false,
                error: action.payload
            }
        case PASSING:
            return{
                ...state,
                pass: true,
                newEdit: action.payload,
            }
        case PUT_START:
            return({
                ...state,
                putting: true,
            })
        case PUT_SUCCESS:
            return({
                ...state,
                putting: false,
                tech: [...state.tech, {...action.payload}],
            })
        case PUT_FAIL:
            return({
                ...state,
                putting: false,
                err: action.payload,
            })
        default:
            return({
                ...state,
            })
    }

}