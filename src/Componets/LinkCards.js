import { Link } from "react-router-dom"
import classes from '../CSS files/LinkCards.module.css'

function LinkCards(props) {
    return(
        <div className={classes.LinkCardCon}>
            <img src={props.icon} className={classes.icon} alt={'music distribution logo'}/>
            <h4 className={classes.iconHeader}>{props.iconHeader}</h4>
            <p className={classes.iconSubText}>{props.iconSubText}</p>
            <Link className={classes.learnMore} to={props.link}>Learn More</Link>

        </div>
    )
}
export default LinkCards