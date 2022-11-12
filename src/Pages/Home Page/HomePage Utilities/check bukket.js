import classes from "../../../CSS files/checlbullet.module.css";

function CheckBullet(props) {
  return (
    <div className={classes.squareAndCircleIconCon}>
      <div className={classes.squareAndCircleIcon}></div>
      <p className={classes.bulletText}>{props.bulletText}</p>
    </div>
  );
}
export default CheckBullet;
