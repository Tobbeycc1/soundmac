import { useState } from 'react';
import { Link } from 'react-router-dom'
import classes from '../CSS files/tabletheader.module.css'



function TabletHeader(props) {

    //  the dropdown for navbar
const navJSX =  <div className={`${classes.tabletNavBar} animate__animated animate__pulse`}>

<Link onClick={noNavItem} className={classes.nav} to={'/'}>Home</Link>
<Link onClick={noNavItem} to={"/musicDistribution"}className={classes.nav}>Music Distribution</Link>
<Link onClick={noNavItem} className={classes.nav} to={'/promotion'}>Promotion</Link>
<Link onClick={noNavItem} className={classes.nav} to={'/pricing'}>Pricing</Link>
<Link onClick={noNavItem} className={classes.nav} to={'/contact'}>Contact</Link>
<Link onClick={noNavItem} className={classes.button} to={'/myportal'}>My Portal</Link>

</div>

const [showNavItem, setShowNavItem]= useState(false)
    function navItem() {
        console.log('nav items are visible');
        setShowNavItem(!showNavItem)
    }
    function noNavItem() {
        console.log('nav items are not visible');
        setShowNavItem(false)
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