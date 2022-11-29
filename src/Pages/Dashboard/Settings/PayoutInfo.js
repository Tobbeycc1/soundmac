import { useContext } from "react";
import SettingsContext from "../../../contexts/Settings Context/SettingsContext";
import classes from "../Settings/Settings.module.css";
import { payoutOptions } from "./Settings Utils/PayoutOptions";
import "animate.css";
import { banksArr } from "./Settings Utils/Banks";

function PayoutInfo() {
  const { payoutFn, payOutInfo } = useContext(SettingsContext);

  return (
    <div className={classes.settings_con}>
      <div>
        <p className={classes.settings_text_kindly}>
          Kindly ensure that all details filled are accurate
        </p>
        <div className={classes.formCon}>
          <select
            name={"payOutOption"}
            value={payOutInfo.payOutOption}
            onChange={payoutFn}
            className={classes.Input}
          >
            {payoutOptions.map((item, index) => (
              <>
                <option key={index}>{item}</option>
              </>
            ))}
          </select>
        </div>
        <br />
        <br />

        {/* email address box, when user selects paypal or payoneer as payment option */}
        {(payOutInfo.payOutOption === "Paypal" ||
          payOutInfo.payOutOption === "Payoneer") && (
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"email"}
              name={
                payOutInfo.payOutOption === "Paypal"
                  ? "Paypal_email_address"
                  : "Payoneer_email_address"
              }
              placeholder={
                payOutInfo.payOutOption === "Paypal"
                  ? "Paypal email address"
                  : "Payoneer email address"
              }
            />
          </div>
        )}

        {/* form when user  selects local bank*/}
        {payOutInfo.payOutOption === "Local bank" && (
          <div>
            <div className={classes.formCon}>
              <input
                className={classes.Input}
                type={"number"}
                name={"account_number"}
                placeholder="Account number"
              />
            </div>
            <br />

            {/* IBAN */}
            <div className={classes.formCon}>
              <input
                className={classes.Input}
                type={"text"}
                name={"IBAN"}
                placeholder="IBAN if any"
              />
            </div>
            <br />

            {/* Bank Name */}
            <div className={classes.formCon}>
              <input
                className={classes.Input}
                type={"text"}
                name={"bank_name"}
                placeholder="Bank name"
              />
            </div>

            <br />

            {/* BIC */}
            <div className={classes.formCon}>
              <input
                className={classes.Input}
                type={"text"}
                name={"BIC"}
                placeholder="BIC if any"
              />
            </div>
            <br />

            {/* SWIFT */}
            <div className={classes.formCon}>
              <input
                className={classes.Input}
                type={"text"}
                name={"SWIFT"}
                placeholder="SWIFT code"
              />
            </div>
            <br />

            {/* Bank Address */}
            <div className={classes.formCon}>
              <input
                className={classes.Input}
                type={"text"}
                name={"bank_address"}
                placeholder="Bank address"
              />
            </div>
            <br />
            <br />

            <div className={classes.update_con}>
              <p className={classes.update_text}>Update</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default PayoutInfo;
