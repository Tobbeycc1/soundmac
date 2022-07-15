import { Link } from 'react-router-dom'
import classes from '../CSS files/dashboardHeader.module.css'
import avi from '../images/IMG_7272 (1).jpg'
import dashboardSmallIcon from '../images/dashbosard small icon.png'
import catalogSmallIcon from '../images/catalog small icon.png'
import historySmallIcon from '../images/history small icon.png'
import { useState } from 'react'
import 'animate.css';


const notificationBellStyle = {
    display: 'inline-block',
    verticalAllign: 'middle'
}
const notificationNumber = 1
export const username = "Tobbey"



function DashboardHeader(props) {

    // small dashboard icons JSX
    const smallIconDashboardJSX = <div className={classes.dashBoardIcon}  
    onMouseLeave={smallActionIconsOnMouseLeave}
    
>
<div className={classes.dashBoardIconB}>

{/* dashboard small icon */}
<Link
className={classes.dashBoardIconLink}
to={'/dashboard'}>

<img src={dashboardSmallIcon} 
className={classes.dashboardIconImage} 
alt= 'dashboard logo'/> 
</Link>

{/* Catalog small icon */}
<Link
className={classes.dashBoardIconLink}
to={'/catalog'}>

<img src={catalogSmallIcon} 
className={classes.dashboardIconImage} 
alt= 'dashboard logo'/> 
</Link>

{/* History small icon */}
<Link
className={classes.dashBoardIconLink}
to={'/history'}>

<img src={historySmallIcon} 
className={classes.dashboardIconImage} 
alt= 'dashboard logo'/> 
</Link>


</div>

</div>
// small dashboard icons JSX ends


    const [showSmallActionIcons, setShowSmallActionIcons]= useState(false)

    function smallActionIconsOnClick() {
        console.log('clicked');
        setShowSmallActionIcons(!showSmallActionIcons)
    }
    function smallActionIconsOnMouseEnter() {
        console.log('mouse entered ');
        setShowSmallActionIcons(true)
    }
    function smallActionIconsOnMouseLeave() {
        console.log('mouse left');
        setShowSmallActionIcons(false)
    }

    return(
        <div className={classes.dashboardHeaderCon}>
            
            <div className={classes.logoDiv} >
            <Link className={classes.logo} to={'/'}>SoundMac</Link>
            </div>

            <div className={classes.usernameAndAviDiv}>
            <i class="fa-solid fa-bell" style={notificationBellStyle} > <sup className={classes.notificationNumber}> {notificationNumber} </sup></i>
            <h4 className={classes.username}>{username}</h4>
            
            <div className={classes.aviCon}>
            <img
             src={avi} 
             alt='avi'
             className={classes.avi}
             onMouseEnter={smallActionIconsOnMouseEnter}
             />
            </div>
            
            </div>

            {showSmallActionIcons && smallIconDashboardJSX}
            
        </div>
    )
}
export default DashboardHeader