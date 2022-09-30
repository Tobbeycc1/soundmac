import { useState, useContext } from "react";
import classes from "../CSS files/Signup.module.css";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsFlag } from "react-icons/bs";
import InputSignIn from "./inputSignIn";
import AuthContext from "../contexts/auth/authContext";
import inputClasses from "../CSS files/inputSignIn.module.css";

import {
  CountryDropdown,
} from "react-country-region-selector";

function SignUp(props) {
  const authContext = useContext(AuthContext);

  const { registerUser } = authContext;

  const [userDetails, setUserDetails] = useState({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const { first_name, last_name, email, password, confirmPassword } =
    userDetails;

  // if firstname field is empty
  const [firstNameIsEmpty, setFirstNameIsEmpty] = useState(null);

  // if lastname field is empty
  const [lastNameIsEmpty, setLastNameIsEmpty] = useState(null);

  // if email field is empty
  const [emailIsEmpty, setEmailIsEmpty] = useState(null);

  // if password field is empty
  const [passwordIsEmpty, setPasswordIsEmpty] = useState(null);

  // if confirmPassword field is empty
  const [confirmPasswordIsEmpty, setConfirmPasswordIsEmpty] = useState(null);

  // if country field is empty
  const [countryIsEmpty, setCountryIsEmpty] = useState(null);

  const onChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setEmailIsEmpty(false);
    setPasswordIsEmpty(false);
    setFirstNameIsEmpty(false);
    setLastNameIsEmpty(false);
    setConfirmPasswordIsEmpty(false);
    setCountryIsEmpty(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    email == "" || email == null
      ? setEmailIsEmpty(true)
      : setEmailIsEmpty(false);

    password == "" || password == null
      ? setPasswordIsEmpty(true)
      : setPasswordIsEmpty(false);

    first_name == "" || first_name == null
      ? setFirstNameIsEmpty(true)
      : setFirstNameIsEmpty(false);

    last_name == "" || last_name == null
      ? setLastNameIsEmpty(true)
      : setLastNameIsEmpty(false);

    confirmPassword == "" || confirmPassword == null
      ? setConfirmPasswordIsEmpty(true)
      : setConfirmPasswordIsEmpty(false);

    country == "" || country == null
      ? setCountryIsEmpty(true)
      : setCountryIsEmpty(false);

    if (password !== confirmPassword) {
      console.log("passwords do not match");
      // add alert(error) message
    } else {
      const user = {
        email,
        first_name,
        last_name,
        country,
        password,
      };
      registerUser(user);
      console.log(user);
    }
  };

  // For Country selcection
  const [location, setLocation] = useState({ country: null });
  const { country, region } = location;

  const selectCountry = (val) => {
    setLocation({ location, country: val });
    console.log(country);
  };

  return (
    <div className={classes.SignInBoxDiv}>
      <div
        className={`${classes.SignInBox} animate__animated animate__headShake`}
        id="signup-modal"
      >
        {/* Cancel Button */}
        <div className={classes.x}>
          <ImCancelCircle className={classes.Gi} onClick={props.noSignUp} />
        </div>

        <p className={classes.welcomeTo}>
          Thank you for choosing{" "}
          <span className={classes.soundmac}>SOUNDMAC</span>
        </p>

        <form onSubmit={onSubmit}>
          <div className={classes.inputCon}>
            {/* Input First Name */}
            {userDetails.first_name == "" || firstNameIsEmpty == true ? (
              <p className={classes.emailEmpty}>first name field is empty</p>
            ) : (
              <></>
            )}
            <InputSignIn
              icon={<MdDriveFileRenameOutline />}
              type={"name"}
              placeholder={"First name"}
              name="first_name"
              onChange={onChange}
              value={first_name}
            />
            {/* Input Last Name */}
            {userDetails.last_name == "" || lastNameIsEmpty == true ? (
              <p className={classes.emailEmpty}>last field is empty</p>
            ) : (
              <></>
            )}
            <InputSignIn
              icon={<MdDriveFileRenameOutline />}
              type={"name"}
              placeholder={"Last name"}
              name="last_name"
              onChange={onChange}
              value={last_name}
            />
            {/* input email */}
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
              onChange={onChange}
              value={email}
            />

            {/* select country */}
            {/* Input Last Name */}
            {location.country == "" || countryIsEmpty == true ? (
              <p className={classes.emailEmpty}>country field is empty</p>
            ) : (
              <></>
            )}
            <div className={inputClasses.formCon}>
              <label className={inputClasses.label}>
                <BsFlag />{" "}
              </label>
              <CountryDropdown
                className={classes.Input}
                value={country}
                onChange={(val) => {
                  selectCountry(val);
                }}
                style={{
                  outline: "none",
                  padding: "2px 15px",
                  width: "100%",
                }}
              />
              <br />
            </div>

            {/* input password */}
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
              onChange={onChange}
              value={password}
            />

            {/* confirm password */}

            {password !== confirmPassword ? (
              <p className={classes.emailEmpty}>password doesn't match</p>
            ) : (
              <></>
            )}

            <InputSignIn
              icon={<RiLockPasswordLine />}
              type={"password"}
              placeholder={"confirmPassword"}
              name="confirmPassword"
              onChange={onChange}
              value={confirmPassword}
            />

            <div className={classes.flexCon}>
              <div className={classes.checkBoxCon}>
                <input type="checkbox" className={classes.largerCheckbox} />
                <p className={classes.rememberMe}>Remember Me?</p>
              </div>
            </div>
          </div>
          <div className={classes.signInCon} onClick={onSubmit}>
            <button type="submit" className={classes.signinButton}>
              Sign Up
            </button>
          </div>

          <p className={classes.dontHavePrev}>Already have an account?</p>
          <p className={classes.dontHave} onClick={props.iHaveAnAcc}>
            Login
          </p>
        </form>

        <p className={classes.or}>or</p>

        <FcGoogle className={classes.googleLoginIcon} />
        <RiFacebookCircleFill className={classes.googleLoginIcon} />
      </div>
    </div>
  );
}
export default SignUp;
