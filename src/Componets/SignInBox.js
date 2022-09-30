import { useState, useContext } from "react";
import classes from "../CSS files/SignInBox.module.css";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import AuthContext from "../contexts/auth/authContext";

import InputSignIn from "./inputSignIn";
import { useEffect } from "react";

function SignInBox(props) {
  const authContext = useContext(AuthContext);

  const { loginUser } = authContext;

  const [userDetails, setUserDetails] = useState({
    email: null,
    password: null,
  });

  const { email, password } = userDetails;

  // if email field is empty
  const [emailIsEmpty, setEmailIsEmpty] = useState(null);

  // if password field is empty
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(null);

  const onChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setEmailIsEmpty(false);
    setPasswordIsEmpty(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    email == "" || email == null
      ? setEmailIsEmpty(true)
      : setEmailIsEmpty(false);

    password == "" || password == null
      ? setPasswordIsEmpty(true)
      : setPasswordIsEmpty(false);

    if (
      email === "" ||
      (email === null && password === "") ||
      password === null
    ) {
      console.log("fields are empty");
      // add alert(error) message
    } else {
      const user = {
        email,
        password,
      };
      loginUser(user);
      console.log(user);
    }
  };

  return (
    <div className={classes.SignInBoxDiv}>
      <div
        className={`${classes.SignInBox} animate__animated animate__rubberBand`}
      >
        {/* Cancel Button */}
        <div className={classes.x}>
          <ImCancelCircle className={classes.Gi} onClick={props.showDeets} />
        </div>
        <p className={classes.welcomeTo}>
          Welcome to <span className={classes.soundmac}>SOUNDMAC</span>
        </p>

        <form onSubmit={onSubmit}>
          <div className={classes.inputCon}>
            {userDetails.email == "" || emailIsEmpty == true ? (
              <p className={classes.emailEmpty}>email field is empty</p>
            ) : (
              <></>
            )}
            <InputSignIn
              icon={<MdOutlineAttachEmail />}
              type={"email"}
              placeholder={"Email"}
              name="email"
              value={email}
              onChange={onChange}
            />

            {userDetails.password == "" || passwordIsEmpty == true ? (
              <p className={classes.emailEmpty}>password field is empty</p>
            ) : (
              <></>
            )}
            <InputSignIn
              icon={<RiLockPasswordLine />}
              type={"password"}
              placeholder={"Password"}
              name="password"
              value={password}
              onChange={onChange}
            />

            <div className={classes.flexCon}>
              <div className={classes.checkBoxCon}>
                <input type="checkbox" className={classes.largerCheckbox} />
                <p className={classes.rememberMe}>Remember Me?</p>
              </div>

              <p className={classes.rememberMe}>Forgot Password?</p>
            </div>
          </div>

          <div className={classes.signInCon} onClick={onSubmit}>
            <button type="submit" className={classes.signinButton}>
              Sign In
            </button>
          </div>
          <p className={classes.dontHavePrev}>Don't have an account?</p>
          <p onClick={props.signUpAt} className={classes.dontHave}>
            Register
          </p>
        </form>

        <p className={classes.or}>or</p>

        <FcGoogle className={classes.googleLoginIcon} />
        <RiFacebookCircleFill className={classes.googleLoginIcon} />
      </div>
    </div>
  );
}
export default SignInBox;
