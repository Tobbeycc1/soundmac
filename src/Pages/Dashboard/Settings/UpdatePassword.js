import classes from "../Settings/Settings.module.css";

function UpdatePassword() {
  return (
    <div className={classes.settings_con}>
      <div>
        <p className={classes.settings_text_kindly}>
          Kindly ensure that all details filled are accurate
        </p>

        <form>
          {/* old password */}
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"password"}
              name={"old_password"}
              placeholder="old password"
              required
            />
          </div>
          <br />
          <br />

          {/* password */}
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"password"}
              name={"new_password"}
              placeholder="new password"
              required
            />
          </div>
          <br />
          <br />

          {/* confirm password */}
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"password"}
              name={"confirm_new_password"}
              placeholder="confirm new password"
              required
            />
          </div>
          <br />
          <br />
          <div className={classes.update_con}>
            <p className={classes.update_text}>Update</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default UpdatePassword;
