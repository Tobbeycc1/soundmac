import classes from "../Settings/Settings.module.css";

function UpdatePassword() {
  return (
    <div className={classes.settings_con}>
      <div>
        {/* email */}
        <form>
          <div className={classes.formCon}>
            <input
              className={classes.Input}
              type={"email"}
              name={"email"}
              placeholder="email"
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
              name={"password"}
              placeholder="password"
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
              name={"confirm_password"}
              placeholder="confirm password"
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
