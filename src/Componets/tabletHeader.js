import { useState } from 'react';
import { Link } from 'react-router-dom'
import classes from '../CSS files/tabletheader.module.css'

//  the dropdown for navbar
const navJSX =  <div className={classes.tabletNavBar}>

<Link className={classes.nav} to={'/'}>Home</Link>
<Link to={"/musicDistribution"}className={classes.nav}>Music Distribution</Link>
<Link className={classes.nav} to={'/promotion'}>Promotion</Link>
<Link className={classes.nav} to={'/pricing'}>Pricing</Link>
<Link className={classes.nav} to={'/contact'}>Contact</Link>
<Link className={classes.button} to={'/myportal'}>My Portal</Link>

</div>

function TabletHeader(props) {
const [showNavItem, setShowNavItem]= useState(false)
    function navItem() {
        console.log('nav items are visible');
        setShowNavItem(!showNavItem)
    }

    return(
        <div className={classes.tabletHeaderCon}>
            <Link className={classes.logo} to={'/'}><h3><Link className={classes.logo} to={'/'}>SoundMac</Link></h3></Link>
            <h3 className={classes.haburgerMenu} onClick={navItem} >&#127828;</h3>
            {showNavItem && navJSX}
           
        </div>
        
    )
}
export default TabletHeader