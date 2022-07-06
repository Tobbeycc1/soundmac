import { Link } from "react-router-dom"
import classes from '../CSS files/Header.module.css'

function Header(props) {
    return(
        <div className={classes.headerContainer} >
            <div className={classes.logoDiv} >
            <Link className={classes.logo} to={'/'}>SoundMac</Link>
            </div>

            <div className={classes.navDiv}>
            <Link className={classes.nav} to={'/'}>Home</Link>
            <Link className={classes.nav} to={'/promotion'}>Promotion</Link>
            <Link className={classes.nav}  to={'/musicdistribution'}>Music Distribution</Link>
            <Link className={classes.nav} to={'/pricing'}>Pricing</Link>
            <Link className={classes.nav} to={'/contact'}>Contact</Link>
            <Link className={classes.button} to={'/myportal'}>My Portal</Link>
            </div>
        </div>
            
           
    )
}
export default Header