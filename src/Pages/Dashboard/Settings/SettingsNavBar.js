import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SettingsContext from "../../../contexts/Settings Context/SettingsContext";
import classes from "../Settings/Settings.module.css";

function SettingsnavBar() {
  // we are reading the pathname so that we can style the button based on if the path name is active or not
  const pathName = window.location.pathname;

  const navigate = useNavigate();

  const { hamburgerMenu } = useContext(SettingsContext);
  return (
    <div className={classes.settings_nav_bar_container}>
      <div>
        <p
          className={
            pathName === "/dashboard/settings/personal-info"
              ? classes.settings_text_clicked
              : classes.settings_text
          }
          onClick={() => {
            hamburgerMenu();
            navigate("/dashboard/settings/personal-info");
          }}
        >
          Personal Info.{" "}
        </p>
        <p
          className={
            pathName === "/dashboard/settings/upgrade-plan"
              ? classes.settings_text_clicked
              : classes.settings_text
          }
          onClick={() => {
            hamburgerMenu();
            navigate("/dashboard/settings/upgrade-plan");
          }}
        >
          Upgrade Plan
        </p>

        <p
          className={
            pathName === "/dashboard/settings/payout-info"
              ? classes.settings_text_clicked
              : classes.settings_text
          }
          onClick={() => {
            hamburgerMenu();
            navigate("/dashboard/settings/payout-info");
          }}
        >
          Payout Info.
        </p>

        <p
          className={
            pathName === "/dashboard/settings/update-password"
              ? classes.settings_text_clicked
              : classes.settings_text
          }
          onClick={() => {
            hamburgerMenu();
            navigate("/dashboard/settings/update-password");
          }}
        >
          Update Password
        </p>
      </div>
    </div>
  );
}
export default SettingsnavBar;
