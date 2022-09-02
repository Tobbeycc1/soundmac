import { Link } from 'react-router-dom'
import classes from '../CSS files/Footer.module.css'
function Footer(props) {
    return(
        <div className={classes.footerCon}> 
        <h2 className={classes.donotMiss}>Don’t miss any update from us, subscribe to our newsletter</h2>
        <form>
            <input className={classes.eMailInput} type='email'/> <br/>
            <button className={classes.submitButton}>Suscribe</button>
        </form>
        <div className={classes.footerNavContentCOn}>
            <h2 className={classes.footerSoundmac}>SOUNDMAC</h2>
            <p className={classes.footerSoundmacText}>Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Suspendisse turpis lorem, placerat non purus sit
amet, ultrices dapibus mi. Pellentesque quis dui ligula. 
volutpat nibh hendrerit, rhoncus dolor mattis, aliquam 
Lorem ipsum dolor sit amet, consectetur adipiscing 
elit. Suspendisse turpis lorem, placerat non purus sit
amet, ultrices dapibus mi. Pellentesque quis dui ligula. 
volutpat nibh hendrerit, rhoncus dolor mattis, aliquam</p>
        </div>

        {/* Company */}
        <div className={classes.footerNavContentCOnB}>
        <h2 className={classes.footerSoundmac}>Company</h2>
            <Link  to={'/'} className={classes.footerSoundmacText}> Home </Link>
            <a href='#about' className={classes.footerSoundmacText}> About </a>
            <a href='#metrics' className={classes.footerSoundmacText}> Metric </a>
            <Link  to={'/'} className={classes.footerSoundmacText}> Sign up </Link>
        </div>

        {/* Service */}
        <div className={classes.footerNavContentCOnB}>
        <h2 className={classes.footerSoundmac}>Services</h2>
            <a href="#musicDistribution" className={classes.footerSoundmacText}>Music Distribution</a>
            <Link  to={'/promotion'} className={classes.footerSoundmacText}> Promotion </Link>
            <Link  to={'/'} className={classes.footerSoundmacText}> Pricing </Link>
        </div>

        {/* Contact */}
        <div className={classes.footerNavContentCOnB}>
        <h2 className={classes.footerSoundmac}>Contact</h2>
        <a href="tel:09058387301" className={classes.footerSoundmacText}>Phone</a>
        <a href="mailto:soundmacinfo@gmail.com" className={classes.footerSoundmacText}>soundmacinfo@gmail.com</a>
            <p className={classes.footerSoundmacText}> Rivers, Nigeria </p>
        </div>
        <p className={classes.copywright}>copywright © SoundMac, 2022 All rights reserved </p> <br/>
        </div>

        
    )
}
export default Footer