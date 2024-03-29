import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/auth/authContext";
import classes from "../../../CSS files/Header.module.css";
import ModalBackground from "../../Sign In and Register/ModalBackground";
import SignInBox from "../../Sign In and Register/SignInBox";
import SignUp from "../../Sign In and Register/SignUp";

function Header(props) {
  const { isAuthenticated } = useContext(AuthContext);
  const { setErrorMssg } = useContext(AuthContext);

  const [modal, showModal] = useState(false);

  const [signUpModal, showSignupModal] = useState(false);

  function showDeets() {
    console.log("Login shown");
    showModal(!modal);
    setErrorMssg("");
  }
  function signUp() {
    console.log("signUp shown");
    showSignupModal(!signUpModal);
    showModal(false);
  }

  function sDAndSM() {
    showModal(true);
    showSignupModal(false);
  }

  return (
    <div className={classes.headerContainer}>
      <div className={classes.logoDiv}>
        <Link className={classes.logo} to={"/"}>
          SoundMac
        </Link>
      </div>

      <div className={classes.navDiv}>
        <Link className={classes.nav} to={"/"}>
          Home
        </Link>
        {/* <Link to={"/musicDistribution"}className={classes.nav}>Music Distribution</Link> */}
        <Link className={classes.nav} to={"/promotion"}>
          Promotion
        </Link>
        <Link className={classes.nav} to={"/pricing"}>
          Pricing
        </Link>
        <Link className={classes.nav} to={"/contact"}>
          Contact
        </Link>

        {isAuthenticated === false ? (
          <span>
            <span className={classes.button_SignIn} onClick={showDeets}>
              Sign In
            </span>

            <span className={classes.button} onClick={signUp}>
              Register
            </span>
          </span>
        ) : (
          <Link to={"/dashboard"} className={classes.button}>
            Dashboard
          </Link>
        )}
      </div>

      <div></div>

      {modal && <ModalBackground noDeets={showDeets} />}
      {modal && <SignInBox showDeets={showDeets} signUpAt={signUp} />}

      {signUpModal && <ModalBackground noDeets={signUp} />}
      {signUpModal && <SignUp noSignUp={signUp} iHaveAnAcc={sDAndSM} />}
    </div>
  );
}
export default Header;
