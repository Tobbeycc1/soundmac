import classes from '../CSS files/AboutUs.module.css'
function AboutUs(props) {
    return(
        <div>
            <h4 className={classes.aboutUsHeader}>About Us</h4>


 <div className={classes.aboutUsText}>
    <h2 className={classes.aboutUsTextHeader}>We are very skilled <br/> at what we do</h2>
    <p className={classes.aboutUsParagraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis lorem,
placerat non purus sit amet, ultrices dapibus mi. Pellentesque quis dui ligula. 
volutpat nibh hendrerit, rhoncus dolor mattis, aliquam felis. Nulla tristique lacus 
eget magna fermentum interdum. Suspendisse molestie luctus diam, vitae convallis 
arcu varius a. Vivamus lobortis posuere magna, at interdum dolor malesuada vel. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis lorem,
placerat non purus sit amet, ultrices dapibus mi. Pellentesque quis dui ligula. 
volutpat nibh hendrerit, rhoncus dolor mattis, aliquam felis. Nulla tristique lacus 
eget magna fermentum interdum. Suspendisse molestie luctus diam, vitae convallis 
arcu varius a. Vivamus lobortis posuere magna, at interdum dolor malesuada ve. </p>
 </div>   
        </div>
    )
}
export default AboutUs