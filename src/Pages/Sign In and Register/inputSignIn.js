import classes from "../../CSS files/inputSignIn.module.css";
function InputSignIn({ icon, type, placeholder, value, onChange, name }) {
  return (
    <div className={classes.formCon}>
      <label className={classes.label}>{icon} </label>
      <input
        className={classes.Input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />{" "}
      <br />
    </div>
  );
}
export default InputSignIn;
