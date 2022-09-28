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
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

function SignUp(props) {
  const authContext = useContext(AuthContext);

  const { registerUser } = authContext;

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, confirmPassword } = userDetails;

  const onChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("passwords do not match");
      // add alert(error) message
    } else {
      const user = {
        username: email,
        password,
      };
      registerUser(user);
      console.log(user);
    }
  };

  // For Country selcection
  const [location, setLocation] = useState({ country: "" });
  const { country, region } = location;

  const selectCountry = (val) => {
    setLocation({ location, country: val });
  };

  return (
    <div className={classes.SignInBoxDiv}>
      <div
        className={`${classes.SignInBox} animate__animated animate__headShake`}
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
            <InputSignIn
              icon={<MdDriveFileRenameOutline />}
              type={"name"}
              placeholder={"First name"}
              name="firstName"
              onChange={onChange}
              value={""}
            />
            {/* Input Last Name */}
            <InputSignIn
              icon={<MdDriveFileRenameOutline />}
              type={"name"}
              placeholder={"Last name"}
              name="lastName"
              onChange={onChange}
              value={""}
            />
            {/* input email */}
            <InputSignIn
              icon={<MdOutlineAttachEmail />}
              type={"email"}
              placeholder={"Email"}
              name="email"
              onChange={onChange}
              value={email}
            />

            {/* select country */}
            <div className={inputClasses.formCon}>
              <label className={inputClasses.label}>
                <BsFlag />{" "}
              </label>
              <CountryDropdown
                className={classes.Input}
                value={country}
                onChange={(val) => selectCountry(val)}
                style={{
                  outline: "none",
                  padding: "2px 15px",
                  width: "100%",
                }}
              />
              <br />
            </div>

            {/* input password */}
            <InputSignIn
              icon={<RiLockPasswordLine />}
              type={"password"}
              placeholder={"Password"}
              name="password"
              onChange={onChange}
              value={password}
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
