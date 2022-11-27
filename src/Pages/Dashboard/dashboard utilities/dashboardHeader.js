import { useState, useContext } from "react";
import AuthContext from "../../../contexts/auth/authContext";
import classes from "../../../CSS files/dashboardHeader.module.css";
import { MdDashboard } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Tooltip, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function DashboardHeader() {
  //   get user data function
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);

  console.log(user);

  // navigate
  const navigate = useNavigate();

  const logOutFunc = () => {
    logOut();
    navigate("/");
  };

  // show mobile nav details
  const [mobileNavDetails, showMobileNavDetails] = useState(false);

  return (
    <div className={classes.dashboardHeaderCon}>
      <p className={classes.logo}>SOUNDMAC</p>

      <p className={classes.welcome}>
        Welcome{" "}
        <span className={classes.first_name}>
          {user !== null ? user.first_name : <Skeleton width="100px" />}
        </span>{" "}
      </p>

      <div className={classes.Tooltip_Con}>
        <Tooltip
          onClick={() => navigate("/dashboard")}
          content={"Dashboard"}
          placement="bottom"
          style={{ margin: "0px 5px" }}
        >
          <div className={classes.icon_con}>
            <MdDashboard className={classes.icon} />
          </div>
        </Tooltip>

        <Tooltip
          onClick={() => navigate("/dashboard/settings/personal-info")}
          content={"Settings"}
          placement="bottom"
          style={{ margin: "0px 5px" }}
        >
          <div className={classes.icon_con}>
            <AiFillSetting className={classes.icon} />
          </div>
        </Tooltip>

        <Tooltip
          content={"Log Out"}
          placement="bottom"
          style={{ margin: "0px 5px" }}
        >
          <div className={classes.icon_con} onClick={logOutFunc}>
            <RiLogoutBoxRFill className={classes.icon} />
          </div>
        </Tooltip>
      </div>
      <div className={classes.small_circle}></div>
      <div
        className={classes.first_letter_Con}
        onClick={() => showMobileNavDetails(!mobileNavDetails)}
      >
        <p className={classes.first_letter}>
          {user !== null && user.first_name[0]}
        </p>{" "}
      </div>

      {/* toggle for mobile */}
      {mobileNavDetails && (
        <div
          className={`${classes.not_for_desk} animate__animated animate__swing`}
        >
          <Tooltip
            onClick={() => {
              navigate("/dashboard");
              showMobileNavDetails(false);
            }}
            content={"Dashboard"}
            placement="bottom"
            style={{ margin: "0px 5px" }}
          >
            <div className={classes.icon_con_toggle}>
              <MdDashboard className={classes.icon_toggle} />
            </div>
          </Tooltip>

          <Tooltip
            content={"Settings"}
            placement="bottom"
            style={{ margin: "0px 5px" }}
            onClick={() => {
              navigate("/dashboard/settings/personal-info");
              showMobileNavDetails(false);
            }}
          >
            <div className={classes.icon_con_toggle}>
              <AiFillSetting className={classes.icon_toggle} />
            </div>
          </Tooltip>

          <Tooltip
            content={"Log Out"}
            placement="bottom"
            style={{ margin: "0px 5px" }}
            onClick={() => {
              showMobileNavDetails(false);
            }}
          >
            <div
              className={classes.icon_con_toggle}
              onClick={logOutFunc}
              style={{ marginLeft: "20px" }}
            >
              <RiLogoutBoxRFill className={classes.icon_toggle} />
            </div>
          </Tooltip>
        </div>
      )}
    </div>
  );
}
export default DashboardHeader;
