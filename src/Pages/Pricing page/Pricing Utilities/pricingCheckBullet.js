import classes from "../../../CSS files/pricingCheckBullet.module.css";

const checkStyles = {
  fontSize: "13px",
  color: "var(--yellow)",
  textAlign: "center",
  marginTop: "25%",
  background: "white",
  borderRadius: "100%",
};
function PricingCheckBullet(props) {
  return (
    <div className={classes.con}>
      <div className={classes.squareAndCircleIcon}>
        <i class="fa-solid fa-circle-check" style={checkStyles}></i>
      </div>
      <h3 className={classes.bulletText}>{props.bulletText}</h3>
    </div>
  );
}
export default PricingCheckBullet;
