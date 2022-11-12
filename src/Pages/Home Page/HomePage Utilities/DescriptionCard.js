import classes from "../../../CSS files/DescriptionCard.module.css";

function DescriptionCard(props) {
  return (
    <div className={classes.DescriptionCardCon}>
      <h1 className={classes.DescriptionCardText}>
        {props.DescriptionCardText}
      </h1>
    </div>
  );
}
export default DescriptionCard;
