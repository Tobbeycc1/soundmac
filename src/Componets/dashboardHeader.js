import { Link } from 'react-router-dom'
import classes from '../CSS files/dashboardHeader.module.css'
import avi from '../images/IMG_7272 (1).jpg'

const notificationBellStyle = {
    display: 'inline-block',
    verticalAllign: 'middle'
}
const notificationNumber = 1
export const username = "Tobbey"

function DashboardHeader(props) {
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
             className={classes.avi}/>
            </div>

            </div>

        </div>
    )
}
export default DashboardHeader