import { AUTH_FAIL, GET_USER, LOGIN_USER, REGISTER_USER } from "../types"


const authReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_USER:
        case REGISTER_USER:
            localStorage.setItem('auth-token', payload)
            return {
                ...state,
                isAutheticated: true,
                token: payload
            }
        case GET_USER:
            return {
                ...state,
                user: payload
            }
        case AUTH_FAIL:
            localStorage.removeItem('auth-token')
            return {
                ...state,
                isAutheticated: false,
                token: null,
                user: null
            }
        default:
            return state
    }
}

export default authReducer