import { Link } from 'react-router-dom'
import Header from '../Componets/Header'
import classes from '../CSS files/Home.module.css'
import speaker from '../images/speaker.png'
import musicAppLogos from '../images/music app logos.png'
function Home(props) {
    return(
        <div className={classes.homeCard1}>
        <Header/>
        <div className={classes.signInAndSpeakerCon}>
           <div className={classes.signInCon}>
           <Link to={'/myportal'} className={classes.signIn}> SIGN UP <br/> FOR FREE</Link>
            <div>
            <p className={classes.horizontalLine}></p> <h2 className={classes.login}>or Login</h2> <p className={classes.horizontalLineB}></p>
            </div>
           </div>

            <div className={classes.speakerCon}>
            <img src={speaker} alt='speaker'/>
            </div>

         </div>

         {/* Body */}
         <div className={classes.earnCon}>
                <h3 className={classes.earn}>Earn While They Listen, With Over <span className={classes.red}>2million</span> Listeners </h3>
                <img src={musicAppLogos} alt='music app logos'/>
                <p className={classes.musicLogotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis lorem, placerat non purus sit amet,<br/>
 ultrices dapibus mi. Pellentesque quis dui ligula. Vivamus volutpat nibh hendrerit,<br/>
 rhoncus dolor mattis, aliquam felis. Nulla tristique lacus eget magna fermentum interdum. Suspendisse molestie luctus diam,<br/>
 vitae convallis arcu varius a. Vivamus lobortis posuere magna, at interdum dolor malesuada vel. </p>
            </div>
        </div>
    )
}
export default Home