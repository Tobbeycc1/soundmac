import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "../CSS files/tabletheader.module.css";
import ModalBackground from "./ModalBackground";
import SignInBox from "./SignInBox";
import SignUp from "./SignUp";

function TabletHeader(props) {
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
      <span onClick={showDeets} className={classes.button} to={"/myportal"}>
        My Portal
      </span>
    </div>
  );

  const [showNavItem, setShowNavItem] = useState(false);
  const [modal, showModal] = useState(false);
  const [signUpModal, showSignupModal] = useState(false);

  function showDeets() {
    console.log("Login shown");
    showModal(!modal);
    setShowNavItem(false);
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
