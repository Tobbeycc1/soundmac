import { ADD_ALERT, REMOVE_ALERT } from "../types";

const alertReducer = (state, action) => {
    const { payload, type } = action
    switch (type) {
        case ADD_ALERT:
            return {
                ...state,
                message: [...state.message, payload]
            }
        case REMOVE_ALERT:
            return {
                ...state,
                message: state.message.filter(msg => msg.id !== payload)
            }
        default:
            return state;
    }
}

export default alertReducer;