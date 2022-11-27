import { useState, useContext, useEffect } from "react";
import classes from "../../CSS files/Signup.module.css";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAttachEmail, MdDriveFileRenameOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import { BsFlag } from "react-icons/bs";

import inputClasses from "../../CSS files/inputSignIn.module.css";
import { ToastContainer, toast } from "react-toastify";
import { Loading } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import AuthContext from "../../contexts/auth/authContext";

function SignUp(props) {
  const authContext = useContext(AuthContext);

  const { registerUser, loading, loader, user } = authContext;
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {
    first_name,
    last_name,
    email,
    password,
    confirmPassword,
  } = userDetails;

  const onChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("passwords do not match");
      // add alert(error) message
      toast.error("Password doesn't match !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (first_name === "") {
      toast.error("First name can't be empty !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (last_name === "") {
      toast.error("Last name can't be empty !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (email === "") {
      toast.error("Email can't be empty !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (country === "") {
      toast.error("country can't be empty !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (password === "") {
      toast.error("pasword can't be empty !", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
      loader();
    }
  };

  // For Country selcection
  const [location, setLocation] = useState({ country: "" });
  const { country, region } = location;

  const selectCountry = (val) => {
    setLocation({ location, country: val });
    console.log(country);
  };
  useEffect(() => {
    user !== null && navigate("/dashboard");
    //eslint-disable-next-line
  }, [user]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
          <form>
            {/* firstName */}
            <div className={classes.formCon}>
              <span className={classes.label}>
                <MdDriveFileRenameOutline />
              </span>
              <input
                className={classes.Input}
                type="text"
                onChange={onChange}
                name={"first_name"}
                value={first_name}
                placeholder="first name"
                required
              />
            </div>
            {/* lastName */}
            <div className={classes.formCon}>
              <span className={classes.label}>
                <MdDriveFileRenameOutline />
              </span>
              <input
                className={classes.Input}
                type="text"
                onChange={onChange}
                name={"last_name"}
                value={last_name}
                placeholder="last name"
                required
              />
            </div>
            {/* email */}
            <div className={classes.formCon}>
              <span className={classes.label}>
                <MdOutlineAttachEmail />
              </span>
              <input
                className={classes.Input}
                type="email"
                onChange={onChange}
                name={"email"}
                value={email}
                placeholder="email"
                required
              />
            </div>
            {/* country */}
            <div className={inputClasses.formCon}>
              <span className={inputClasses.label}>
                <BsFlag />{" "}
              </span>
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
            {/* password */}
            <div className={classes.formCon}>
              <span className={classes.label}>
                <RiLockPasswordLine />
              </span>
              <input
                className={classes.Input}
                type="password"
                onChange={onChange}
                name={"password"}
                value={password}
                placeholder="password"
                required
              />
            </div>
            {/* confirmPassword*/}
            <div className={classes.formCon}>
              <span className={classes.label}>
                <RiLockPasswordLine />
              </span>
              <input
                className={classes.Input}
                type="password"
                onChange={onChange}
                name={"confirmPassword"}
                value={confirmPassword}
                placeholder="confirm password"
                required
              />
            </div>
            {loading === true ? (
              <button className={classes.signInCon}>
                {" "}
                <Loading type="points-opacity" />
              </button>
            ) : (
              <button
                type="submit"
                className={classes.signInCon}
                onClick={onSubmit}
              >
                {" "}
                Register
              </button>
            )}
          </form>
          <p className={classes.dontHavePrev}>Already have an account?</p>
          <p className={classes.dontHave} onClick={props.iHaveAnAcc}>
            Login
          </p>

          <p className={classes.or}>or</p>

          <FcGoogle className={classes.googleLoginIcon} />
          <RiFacebookCircleFill className={classes.googleLoginIcon} />
        </div>
      </div>
    </div>
  );
}
export default SignUp;
