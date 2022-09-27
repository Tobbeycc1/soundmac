import { useState, useContext } from 'react';
import classes from '../CSS files/Signup.module.css'
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import InputSignIn from './inputSignIn';
import AuthContext from '../contexts/auth/authContext';

function SignUp(props) {

    const authContext = useContext(AuthContext)

    const { registerUser } = authContext

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { email, password, confirmPassword } = userDetails

    const onChange = (e) => {
        setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
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
        <div className={classes.SignInBoxDiv}>
            <div className={`${classes.SignInBox} animate__animated animate__headShake`}>
                {/* Cancel Button */}
                <div className={classes.x}>
                    <ImCancelCircle className={classes.Gi} onClick={props.noSignUp} />
                </div>

                <p className={classes.welcomeTo}>Thank you for choosing <span className={classes.soundmac}>SOUNDMAC</span></p>

                <form onSubmit={onSubmit}>
                    <div className={classes.inputCon}>

                        <InputSignIn
                            icon={<MdOutlineAttachEmail />}
                            type={'email'}
                            placeholder={'Email'}
                            name="email"
                            onChange={onChange}
                            value={email}
                        />

                        <InputSignIn
                            icon={<RiLockPasswordFill />}
                            type={'password'}
                            placeholder={'Password'}
                            name="password"
                            onChange={onChange}
                            value={password}
                        />

                        {/* Re enter password */}
                        <InputSignIn
                            icon={<RiLockPasswordFill />}
                            type={'password'}
                            placeholder={'Re-enter Password'}
                            name="confirmPassword"
                            onChange={onChange}
                            value={confirmPassword}
                        />

                        <div className={classes.flexCon}>
                            <div className={classes.checkBoxCon}>
                                <input type='checkbox' className={classes.largerCheckbox} /><p className={classes.rememberMe}>Remember Me?</p>
                            </div>
                        </div>

                    </div>
                    <div className={classes.signInCon}
                        onClick={onSubmit}
                    >
                        <button type='submit' className={classes.signinButton}

                        >Sign Up</button>
                    </div>
                    <p className={classes.dontHave} onClick={props.iHaveAnAcc}>I have an account</p>
                </form>

                <p className={classes.or}>or</p>

                <FcGoogle className={classes.googleLoginIcon} />
                <RiFacebookCircleFill className={classes.googleLoginIcon} />

            </div>
        </div>
    )
}
export default SignUp