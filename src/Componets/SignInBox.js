import { useState, useContext } from 'react'
import classes from '../CSS files/SignInBox.module.css'
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import AuthContext from '../contexts/auth/authContext';

import InputSignIn from './inputSignIn';



function SignInBox(props) {
    const authContext = useContext(AuthContext)

    const { registerUser } = authContext

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    })

    const { email, password } = userDetails

    const onChange = (e) => {
        setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (email === '' && password === '') {
            console.log('passwords do not match')
            // add alert(error) message
        } else {
            const user = {
                username: email, password
            }
            registerUser(user)
            console.log(user)
        }
    }


    return (
        <div className={classes.SignInBoxDiv} >
            <div className={`${classes.SignInBox} animate__animated animate__rubberBand`} >

                {/* Cancel Button */}
                <div className={classes.x}>
                    <ImCancelCircle className={classes.Gi} onClick={props.showDeets} />
                </div>
                <p className={classes.welcomeTo}>Welcome to <span className={classes.soundmac}>SOUNDMAC</span></p>

                <form onSubmit={onSubmit}>
                    <div className={classes.inputCon}>

                        <InputSignIn
                            icon={<MdOutlineAttachEmail />}
                            type={'email'}
                            placeholder={'Email'}
                            name="email"
                            value={email}
                            onChange={onChange}
                        />

                        <InputSignIn
                            icon={<RiLockPasswordFill />}
                            type={'password'}
                            placeholder={'Password'}
                            name="password"
                            value={password}
                            onChange={onChange}
                        />

                        <div className={classes.flexCon}>
                            <div className={classes.checkBoxCon}>
                                <input type='checkbox' className={classes.largerCheckbox} /><p className={classes.rememberMe}>Remember Me?</p>
                            </div>

                            <p className={classes.rememberMe}>Forgot Password?</p>
                        </div>


                    </div>

                    <div className={classes.signInCon}
                        onClick={onSubmit}
                    >
                        <button type='submit' className={classes.signinButton}>Sign In</button>

                    </div>


                    <p onClick={props.signUpAt} className={classes.dontHave}>Don't have an account Yet?</p>
                </form>


                <p className={classes.or}>or</p>

                <FcGoogle className={classes.googleLoginIcon} />
                <RiFacebookCircleFill className={classes.googleLoginIcon} />


            </div>
        </div>
    )
}
export default SignInBox