import { useEffect, useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import AlertContext from '../contexts/alert/alertContext'

const Alert = () => {
    const { message } = useContext(AlertContext)

    useEffect(() => {
        message.length > 0 && message.map((value) => toast[value.type](value.msg))
    }, [message])
    return (
        <div>
            <ToastContainer theme='colored' />
        </div>
    )
}

export default Alert;