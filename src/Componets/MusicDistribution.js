import classes from '../CSS files/MusicDribution.module.css'
import musicAppLogos from '../images/music app logos.png'
function MusicDistribution(props) {
    return(
<div>
<h3 className={classes.earn}>Earn While They Listen, With Over <span className={classes.red}>2million</span> Listeners </h3>
                <img src={musicAppLogos} alt='music app logos'/>
                <p className={classes.musicLogotext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis lorem, placerat non purus sit amet,<br/>
 ultrices dapibus mi. Pellentesque quis dui ligula. Vivamus volutpat nibh hendrerit,<br/>
 rhoncus dolor mattis, aliquam felis. Nulla tristique lacus eget magna fermentum interdum. Suspendisse molestie luctus diam,<br/>
 vitae convallis arcu varius a. Vivamus lobortis posuere magna, at interdum dolor malesuada vel. </p>
</div>
    )
}
export default MusicDistribution