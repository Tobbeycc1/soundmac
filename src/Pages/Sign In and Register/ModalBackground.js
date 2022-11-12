import classes from "../../CSS files/ModalBackground.module.css";
function ModalBackground(props) {
  return (
    <div className={classes.ModalBackground} onClick={props.noDeets}></div>
  );
}
export default ModalBackground;
