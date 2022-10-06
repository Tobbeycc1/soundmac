import { useState, useContext, useEffect } from "react";
import classes from "../CSS files/SignInBox.module.css";
import { ImCancelCircle } from "react-icons/im";
import { MdOutlineAttachEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";
import AuthContext from "../contexts/auth/authContext";
import { ToastContainer, toast } from "react-toastify";
import "animate.css";

import "react-toastify/dist/ReactToastify.css";

import { Loading } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function SignInBox(props) {
  const authContext = useContext(AuthContext);

  const { loginUser, loading, errorMssg, user } = authContext;

  // console.log(isAuthenticated);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userDetails;

  const navigate = useNavigate();

  const onChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Email can't be empty !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (password.length < 8) {
      toast.error("Password should be more than 7 characters !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (email === "" && password === "") {
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

  useEffect(() => {
    user !== null && navigate("/dashboard");
    //eslint-disable-next-line
  }, [user]);

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={classes.SignInBoxDiv}>
        <div
          className={`${classes.SignInBox} animate__animated animate__rubberBand`}
        >
          {errorMssg === "Invalid credentials" ? (
            <p>Incorrect e-mail or password</p>
          ) : (
            <></>
          )}
          {/* Cancel Button */}
          <div className={classes.x}>
            <ImCancelCircle className={classes.Gi} onClick={props.showDeets} />
          </div>
          <p className={classes.welcomeTo}>
            Welcome to <span className={classes.soundmac}>SOUNDMAC</span>
          </p>

          <form onSubmit={onSubmit}>
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
                Sign In
              </button>
            )}

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
    </div>
  );
}
export default SignInBox;
