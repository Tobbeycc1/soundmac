import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../CSS files/Header.module.css";
import ModalBackground from "./ModalBackground";
import SignInBox from "./SignInBox";
import TabletHeader from "./tabletHeader";
import SignUp from "./SignUp";

function Header(props) {
  const [modal, showModal] = useState(false);

  const [signUpModal, showSignupModal] = useState(false);

  function showDeets() {
    console.log("Login shown");
    showModal(!modal);
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
        <span className={classes.button} onClick={showDeets}>
          My Portal
        </span>
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
