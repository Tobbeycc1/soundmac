import classes from "../Settings/Settings.module.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useContext } from "react";
import SettingsContext from "../../../contexts/Settings Context/SettingsContext";

function PersonalInfo() {
  const { country, setCountry, region, setRegion } = useContext(
    SettingsContext
  );
  return (
    <div className={classes.settings_con}>
      <div>
        <p className={classes.settings_text_kindly}>
          Kindly ensure that all details filled are accurate
        </p>
        {/* firstName */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"text"}
              name={"first_name"}
              placeholder="first name"
            />
          </div>
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>

        {/* last name */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"text"}
              name={"last_name"}
              placeholder="last name"
            />
          </div>
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>

        {/* artiste name */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"text"}
              name={"artiste_name"}
              placeholder="artiste name"
            />
          </div>
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>

        {/* label name */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"text"}
              name={"label_name"}
              placeholder="label name"
            />
          </div>
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>

        {/* mobile number */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"tel"}
              name={"mobile_number"}
              placeholder="mobile number"
            />
          </div>
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>

        {/* address 1 */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"text"}
              name={"address_1"}
              placeholder="address 1"
            />
          </div>
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>

        {/* Address 2 */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"text"}
              name={"address_2"}
              placeholder="address 2"
            />
          </div>
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>

        {/* country */}

        <div className={classes.formCon}>
          <CountryDropdown
            value={country}
            onChange={(val) => setCountry(val)}
            className={classes.Input}
            style={{
              outline: "none",
              width: "100%",
            }}
          />
        </div>
        <br />
        <div className={classes.formCon}>
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
            className={classes.Input}
            style={{
              outline: "none",
              width: "100%",
            }}
          />
          <br />
        </div>
        <br />
        <div className={classes.formCon}>
          <input
            className={classes.Input}
            type={"text"}
            name={"city"}
            placeholder="city / town"
          />
        </div>
        <br />

        <div className={classes.formCon}>
          <input
            className={classes.Input}
            type={"number"}
            name={"postal_code"}
            placeholder="postal code"
          />
        </div>

        <div className={classes.update_con}>
          <p className={classes.update_text}>Update</p>
        </div>
      </div>
    </div>
  );
}
export default PersonalInfo;
