import Footer from "../Home Page/HomePage Utilities/Footer";
import PricingCheckBullet from "./Pricing Utilities/pricingCheckBullet";
import PricingPerYearCard from "./Pricing Utilities/pricingPricePerYearCard";
import classes from "../../CSS files/Pricing.module.css";
import cashImage from "../../images/cashImage.png";
import independentArtistLogo from "../../images/independent Artist Logo.png";
import freeArtistLogo from "../../images/free.png";
import miniLabelLogo from "../../images/mini label Logo.png";
import fullLabelLogo from "../../images/full label.png";

function Pricing(props) {
  return (
    <div className={classes.pricingBigCon}>
      <div className={classes.pricingCon}>
        <h1 className={classes.whileWeDistribute}>
          While we distribute, <br />{" "}
          <span className={classes.noBoldOnHeader}>
            you stay independent, focus on your music and earn money.
          </span>
        </h1>
      </div>

      <div className={classes.pricingCardsCon}>
        <div className={classes.cash}>
          <img src={cashImage} className={classes.cashImage} alt="cash" />
          <h1 className={classes.distributeHeader}>
            Distribute your first release with Soundmac and get your music into
            over 100 partner stores worldwide!
          </h1>
        </div>

        {/* free account */}
        <div className={classes.pricingCardsSubCon}>
          <div className={classes.pricingCardsTextSubCon}>
            <img
              className={classes.independentArtistLogo}
              src={freeArtistLogo}
              alt="free artiste Logo"
            />
            <h2 className={classes.iA}> Free Account </h2>
            <PricingCheckBullet bulletText="Unlimited number of songs" />
            <PricingCheckBullet bulletText="You keep 80% royalty" />
            <PricingCheckBullet bulletText="Free barcode & ISRC" />
            <PricingCheckBullet bulletText="YouTube Monetization" />
            <PricingCheckBullet bulletText="Payment direct to your bank account" />
            <PricingCheckBullet bulletText="Song get distributed within 12days" />
          </div>
          <PricingPerYearCard PricingPerYearCardPrice={"Free"} />
        </div>

        {/* independent Label Service  */}
        <div className={classes.pricingCardsSubConMiniLabel}>
          <div className={classes.pricingCardsTextSubCon}>
            <img
              className={classes.independentArtistLogo}
              src={independentArtistLogo}
              alt=" independent artiste Logo"
            />
            <h2 className={classes.iA}>Independent Artiste</h2>
            <PricingCheckBullet bulletText="Unlimited distribution" />
            <PricingCheckBullet bulletText="You keep 100% royalty" />
            <PricingCheckBullet bulletText="Royalty split payment" />
            <PricingCheckBullet bulletText="Free barcodes and ISRC codes" />
            <PricingCheckBullet bulletText="YouTube Monetization" />
            <PricingCheckBullet bulletText="Dedicated support team" />
            <PricingCheckBullet bulletText="Playlist pitching" />
            <PricingCheckBullet bulletText="Free smart link for all of these" />
            <PricingCheckBullet bulletText="Daily streaming stats" />
            <PricingCheckBullet bulletText="Customizable release & pre-order date" />
            <PricingCheckBullet bulletText="Payments direct to your bank account" />
          </div>
          <PricingPerYearCard PricingPerYearCardPrice={"$14.99/yr"} />
        </div>

        {/* Full Label Service (unlimited artists) */}
        <div className={classes.pricingCardsSubCon}>
          <div className={classes.pricingCardsTextSubCon}>
            <img
              className={classes.independentArtistLogo}
              src={miniLabelLogo}
              alt=""
            />
            <h2 className={classes.iA}>Mini Label Service</h2>
            <PricingCheckBullet bulletText="Up to 10 artiste" />
            <PricingCheckBullet bulletText="Unlimited distribution" />
            <PricingCheckBullet bulletText="You keep 100% royalty" />
            <PricingCheckBullet bulletText="Royalty split payment" />
            <PricingCheckBullet bulletText="Free barcode & ISRC" />
            <PricingCheckBullet bulletText="YouTube Monetization" />
            <PricingCheckBullet bulletText="Dedicated support team" />
            <PricingCheckBullet bulletText="Playlist pitching" />
            <PricingCheckBullet bulletText="Free smart link for all release" />
            <PricingCheckBullet bulletText="Customizable release & pre-order date" />
            <PricingCheckBullet bulletText="Song get distributed within 48hours" />
            <PricingCheckBullet bulletText="Payment direct to your bank account" />
          </div>
          <PricingPerYearCard PricingPerYearCardPrice={"$99.99/yr"} />
        </div>

        {/*  Label Service  */}
        <div className={classes.pricingCardsSubCon_alone}>
          <div className={classes.pricingCardsTextSubCon}>
            <img
              className={classes.independentArtistLogo}
              src={fullLabelLogo}
              alt=""
            />
            <h2 className={classes.iA}> Label Service</h2>
            <PricingCheckBullet bulletText="Unlimited artiste" />
            <PricingCheckBullet bulletText="Unlimited distribution" />
            <PricingCheckBullet bulletText="You keep 100% of royalty" />
            <PricingCheckBullet bulletText="Royalty split payment" />
            <PricingCheckBullet bulletText="Free barcode & ISRC" />
            <PricingCheckBullet bulletText="YouTube Monetization" />
            <PricingCheckBullet bulletText="Dedicated support team" />
            <PricingCheckBullet bulletText="Playlist pitching" />
            <PricingCheckBullet bulletText="Free smart link for all release" />
            <PricingCheckBullet bulletText="Customizable release & pre-order date" />
            <PricingCheckBullet bulletText="Customizable ISRC codes" />
            <PricingCheckBullet bulletText="Payment direct to your bank account" />
          </div>
          <PricingPerYearCard PricingPerYearCardPrice={"$149.99/yr"} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Pricing;
