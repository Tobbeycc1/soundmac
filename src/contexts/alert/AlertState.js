import { useReducer } from 'react'
import alertReducer from './alertReducer'
import AlertContext from './alertContext'
import { ADD_ALERT, REMOVE_ALERT } from '../types'
import { v4 as uuid } from 'uuid';

const AlertState = ({ children }) => {
    const initialState = {
        message: []
    }

    const [state, dispatch] = useReducer(alertReducer, initialState)

    // add message

    // type: error, success, warning
    const addMessage = (msg, type) => {

        const id = uuid() // unique id
        dispatch({
            type: ADD_ALERT,
            payload: {
                id,
                msg,
                type
            }
        })

        // clear
        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT,
                payload: id
            })
        }, 5000)
    }

    return (
        <AlertContext.Provider value={{
            message: state.message,
            addMessage
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState