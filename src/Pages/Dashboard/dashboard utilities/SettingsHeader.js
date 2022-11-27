import { useContext } from "react";
import SettingsContext from "../../../contexts/Settings Context/SettingsContext";
import classes from "../Settings/Settings.module.css";

function SettingsHeader() {
  const { isSmallScreen, hamburgerMenu } = useContext(SettingsContext);

  return (
    <div className={classes.settings_header_con}>
      {isSmallScreen && (
        <h1 onClick={hamburgerMenu} className={classes.haburgerMenu}>
          {" "}
          &#9776;
        </h1>
      )}
      <h2 className={classes.text}>Settings</h2>
    </div>
  );
}
export default SettingsHeader;
