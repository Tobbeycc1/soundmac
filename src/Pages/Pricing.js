


import Footer from '../Componets/Footer'
import PricingCheckBullet from '../Componets/pricingCheckBullet'
import PricingPerYearCard from '../Componets/pricingPricePerYearCard'
import classes from '../CSS files/Pricing.module.css'
import cashImage from '../images/cashImage.png'
import independentArtistLogo from '../images/independent Artist Logo.png'
import miniLabelLogo from '../images/mini label Logo.png'
import fullLabelLogo from '../images/full label.png'

function Pricing(props) {
    return(
        <div className={classes.pricingBigCon}>
          

           <div className={classes.pricingCon}>
            <h1>While we distribute, <br/> <span className={classes.noBoldOnHeader}>you stay independent, focus on your music and earn money.</span></h1>
           </div>

           <div className={classes.pricingCardsCon}>
            <div className={classes.cash}>
            <img src={cashImage} alt= "cash" />
            <h1 className={classes.distributeHeader}>Distribute your first release with 
Soundmac and get your music into 
over 100 partner stores worldwide!
</h1>
            </div>
            

            
            <div className={classes.pricingCardsSubCon}>
                <div className={classes.pricingCardsTextSubCon}>
                <img className={classes.independentArtistLogo} src={independentArtistLogo} alt= "independent artis Logo"/>
                <h2>Independent Artist</h2>
                <PricingCheckBullet bulletText="Unlimited number of songs"/>
                <PricingCheckBullet bulletText="You keep 90% royalty"/>
                <PricingCheckBullet bulletText="Royalty split payments"/>
                <PricingCheckBullet bulletText="Keep 100% of your copyright"/>
                <PricingCheckBullet bulletText="Free barcodes and ISRC codes"/>
                <PricingCheckBullet bulletText="Free smart link for all releases"/>
                <PricingCheckBullet bulletText="Playlist pitching"/>
                <PricingCheckBullet bulletText="Youtube monetization"/>
                <PricingCheckBullet bulletText="Dedicated support team in your local market"/>
                <PricingCheckBullet bulletText="Payments direct to your bank account"/>
                </div>
                <PricingPerYearCard PricingPerYearCardPrice={'$25/yr'}/>
                                
            </div>

            {/* Mini Label Service (10 artists) */}
            <div className={classes.pricingCardsSubConMiniLabel}>
            <div className={classes.pricingCardsTextSubCon}>
                <img className={classes.independentArtistLogo} src={miniLabelLogo} alt= ""/>
                <h2>Mini Label Service (10 artists)</h2>
                <PricingCheckBullet bulletText="Accounting Services"/>
                <PricingCheckBullet bulletText="You keep 85% royalty"/>
                <PricingCheckBullet bulletText="Keep 100% of your copyright"/>
                <PricingCheckBullet bulletText="Free barcodes and ISRC codes"/>
                <PricingCheckBullet bulletText="Free smart link for all releases"/>
                <PricingCheckBullet bulletText="Free delivery to new stores"/>
                <PricingCheckBullet bulletText="Playlist pitching"/>
                <PricingCheckBullet bulletText="Youtube monetization"/>
                <PricingCheckBullet bulletText="Sync and licensing opportunities"/>
                <PricingCheckBullet bulletText="Dedicated support team in your local market"/>
                <PricingCheckBullet bulletText="Payments direct to your bank account"/>
            </div>
            <PricingPerYearCard PricingPerYearCardPrice={'$150/yr'}/>
            </div>

            {/* Full Label Service (unlimited artists) */}
            <div className={classes.pricingCardsSubCon}>
            <div className={classes.pricingCardsTextSubCon}>
                <img className={classes.independentArtistLogo} src={fullLabelLogo} alt= ""/>
                <h2>Full Label Service (unlimited artists)</h2>
                <PricingCheckBullet bulletText="Accounting Services"/>
                <PricingCheckBullet bulletText="You keep 85% royalty"/>
                <PricingCheckBullet bulletText="Keep 100% of your copyright"/>
                <PricingCheckBullet bulletText="Free barcodes and ISRC codes"/>
                <PricingCheckBullet bulletText="Free smart link for all releases"/>
                <PricingCheckBullet bulletText="Free delivery to new stores"/>
                <PricingCheckBullet bulletText="Playlist pitching"/>
                <PricingCheckBullet bulletText="Youtube monetization"/>
                <PricingCheckBullet bulletText="Sync and licensing opportunities"/>
                <PricingCheckBullet bulletText="Dedicated support team in your local market"/>
                <PricingCheckBullet bulletText="Payments direct to your bank account"/>
            </div>
            <PricingPerYearCard PricingPerYearCardPrice={'$500/yr'}/>
            </div>




            

            

            
            
           </div>
           <Footer/>

        </div>
    )
}
export default Pricing