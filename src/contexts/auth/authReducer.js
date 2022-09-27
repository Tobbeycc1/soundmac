import { AUTH_FAIL, LOGIN_USER, REGISTER_USER } from "../types"


const authReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_USER:
        case REGISTER_USER:
            return {
                isAutheticated: true,
                token: payload
            }
        case AUTH_FAIL:
            return {
                isAutheticated: false,
                token: null
            }
        default:
            return state
    }
}

export default authReducer