import { Link } from "react-router-dom";
import classes from "../../../CSS files/pricingPricePerYearCard.module.css";
function PricingPerYearCard(props) {
  return (
    <div className={classes.pricePerYearCardCon}>
      <Link to={"/"} className={classes.priceLink}>
        {props.PricingPerYearCardPrice}
      </Link>
    </div>
  );
}
export default PricingPerYearCard;
