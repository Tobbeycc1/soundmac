import Header from "../Componets/Header"
import classes from '../CSS files/Pricing.module.css'

function Pricing(params) {
    return(
        <div className={classes.pricingBigCon}>
           <Header/> 

           <div className={classes.pricingCon}>
            <h1>While we distribute, <br/> <span className={classes.noBoldOnHeader}>you stay independent, focus in your music and earn money.</span></h1>
           </div>

           <div>
            
           </div>

        </div>
    )
}
export default Pricing