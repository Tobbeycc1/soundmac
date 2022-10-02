import { useState } from "react";
import { useContext, useEffect } from "react";
import AuthContext from "../contexts/auth/authContext";
import classes from "../CSS files/dashboardHeader.module.css";
import { MdDashboard } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { Tooltip, Button } from "@nextui-org/react";

function DashboardHeader(props) {
  //   get user data function
  const { user } = useContext(AuthContext);
  const { logOut } = useContext(AuthContext);

  console.log(user);

  return (
    <div className={classes.dashboardHeaderCon}>
      <p className={classes.logo}>SOUNDMAC</p>

      <p className={classes.welcome}>
        Welcome{" "}
        <span className={classes.first_name}>
          {user !== null && user.first_name}
        </span>{" "}
      </p>

      <div className={classes.Tooltip_Con}>
        <Tooltip
          content={"Dashboard"}
          placement="bottom"
          style={{ margin: "0px 5px" }}
        >
          <div className={classes.icon_con}>
            <MdDashboard className={classes.icon} />
          </div>
        </Tooltip>

        <Tooltip
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
          <div className={classes.icon_con} onClick={logOut}>
            <RiLogoutBoxRFill className={classes.icon} />
          </div>
        </Tooltip>
      </div>
      <div className={classes.small_circle}></div>
      <div className={classes.first_letter_Con}>
        <p className={classes.first_letter}>
          {user !== null && user.first_name[0]}
        </p>{" "}
      </div>
    </div>
  );
}
export default DashboardHeader;
