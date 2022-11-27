import classes from "../Settings/Settings.module.css";
import { payoutOptions } from "./Settings Utils/PayoutOptions";

function PayoutInfo() {
  console.log(payoutOptions);
  return (
    <div className={classes.settings_con}>
      <div>
        <div className={classes.formCon}>
          <select className={classes.Input}>
            {payoutOptions.map((item, index) => (
              <>
                <option>{item}</option>
              </>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
export default PayoutInfo;
