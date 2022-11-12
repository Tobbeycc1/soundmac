import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/auth/authContext";
import classes from "../../../CSS files/tabletheader.module.css";
import ModalBackground from "../../Sign In and Register/ModalBackground";

import SignInBox from "../../Sign In and Register/SignInBox";
import SignUp from "../../Sign In and Register/SignUp";

function TabletHeader(props) {
  const { isAuthenticated } = useContext(AuthContext);
  const { setErrorMssg } = useContext(AuthContext);

  //  the dropdown for navbar
  const navJSX = (
    <div className={`${classes.tabletNavBar} animate__animated animate__pulse`}>
      <Link onClick={noNavItem} className={classes.nav} to={"/"}>
        Home
      </Link>
      {/* <Link onClick={noNavItem} to={"/musicDistribution"}className={classes.nav}>Music Distribution</Link> */}
      <Link onClick={noNavItem} className={classes.nav} to={"/promotion"}>
        Promotion
      </Link>
      <Link onClick={noNavItem} className={classes.nav} to={"/pricing"}>
        Pricing
      </Link>
      <Link onClick={noNavItem} className={classes.nav} to={"/contact"}>
        Contact
      </Link>

      {isAuthenticated === false ? (
        <span>
          <div className={classes.button} onClick={showDeets}>
            Sign In
          </div>

          <div className={classes.button} onClick={signUp}>
            Register
          </div>
        </span>
      ) : (
        <Link to={"/dashboard"} className={classes.button}>
          Dashboard
        </Link>
      )}
    </div>
  );

  const [showNavItem, setShowNavItem] = useState(false);
  const [modal, showModal] = useState(false);
  const [signUpModal, showSignupModal] = useState(false);

  function showDeets() {
    console.log("Login shown");
    showModal(!modal);
    setShowNavItem(false);
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

  function navItem() {
    console.log("nav items are visible");
    setShowNavItem(!showNavItem);
  }
  function noNavItem() {
    console.log("nav items are not visible");
    setShowNavItem(false);
  }

  return (
    <div className={classes.tabletHeaderCon}>
      <Link className={classes.logo} to={"/"}>
        <h3>
          <Link className={classes.logo} to={"/"}>
            SoundMac
          </Link>
        </h3>
      </Link>
      <h3 className={classes.haburgerMenu} onClick={navItem}>
        &#9776;
      </h3>
      {showNavItem && navJSX}

      {modal && <ModalBackground noDeets={showDeets} />}
      {modal && <SignInBox showDeets={showDeets} signUpAt={signUp} />}

      {signUpModal && <ModalBackground noDeets={signUp} />}
      {signUpModal && <SignUp noSignUp={signUp} iHaveAnAcc={sDAndSM} />}
    </div>
  );
}
export default TabletHeader;
