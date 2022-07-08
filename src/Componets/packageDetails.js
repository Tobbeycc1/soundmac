import classes from '../CSS files/packageDetails.module.css'
function PackageDetails(props) {
    return(
        <div> 
        <h3>{props.packageName}</h3>
        <p className={classes.packageDetailsText}>{props.packageDetailsText}</p>
        <p className={classes.packageDetailsSubText}>{props.packageDetailsSubTextA}</p>
        <p className={classes.packageDetailsSubText}>{props.packageDetailsSubTextB}</p>
        <p className={classes.packageDetailsSubText}>{props.packageDetailsSubTextC}</p>
        <p className={classes.packageDetailsSubText}>{props.packageDetailsSubTextD}</p>

        <div className={classes.packagePriceCon}>
          <h2 className={classes.packageOldPrice}>{props.packageOldPrice}</h2>
        <h1 className={classes.packagenewPrice}>{props.packagenewPrice}</h1>   
        </div>
       
        </div>
    )
}
export default PackageDetails