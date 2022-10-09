import { Link } from "react-router-dom";
import classes from "../CSS files/Home.module.css";
import speaker from "../images/speaker.png";
import musicAppLogos from "../images/music app logos.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import LinkCards from "../Componets/LinkCards";
import musicDistributionLogo from "../images/music distribution icon.png";
import promotionLogo from "../images/promotion icon.png";
import pricingLogo from "../images/pricing icon.png";
import Metrics from "../Componets/Metrics";
import CheckBullet from "../Componets/check bukket";
import Footer from "../Componets/Footer";
import MusicDistribution from "../Componets/MusicDistribution";
import MediaQuery from "react-responsive";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../index.css";
import bigCheck from "../images/big check.png";
import { useState } from "react";
import ModalBackground from "../Componets/ModalBackground";
import SignInBox from "../Componets/SignInBox";
import SignUp from "../Componets/SignUp";
import headsetGuys from "../images/headsetGuys.png";
import DescriptionCard from "../Componets/DescriptionCard";
import earpieceGirl from "../images/earpieceGirl.png";
import { BsClipboardCheck } from "react-icons/bs";

// ..
AOS.init();

const checkStyles = {
  // fontSize:'274px',
  color: "var(--yellow)",
  textAlign: "center",
  marginTop: "25%",
  background: "white",
  borderRadius: "100%",
};

function Home(props) {
  const [modal, showModal] = useState(false);

  const [signUpModal, showSignupModal] = useState(false);

  function showDeets() {
    console.log("Login shown");
    showModal(!modal);
  }
  function signUp() {
    console.log("signUp shown");
    showSignupModal(!signUpModal);
    showModal(false);
  }

  function sDAndSM() {
    showModal(true);
    showSignupModal(false);
  }

  return (
    <div className={classes.homeCon}>
      <div className={classes.homeCard1}>
        <div className={classes.signInAndSpeakerCon}></div>
        {/* <h1 className={classes.welcome}>WELCOME</h1> */}
      </div>

      {/* Body */}
      <div id="musicDistribution" className={classes.earnCon}>
        <div>
          <MusicDistribution />
        </div>
      </div>

      <div
        className={classes.headsetGuysCon}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          src={headsetGuys}
          alt="group of guys on headset"
          className={classes.headsetGuys}
        />

        <DescriptionCard DescriptionCardText="Soundmac is one of the fastest-rising music distribution companies in the world." />
      </div>

      {/* show for only 540px */}
      <div
        className={classes.headsetGuysConOnly}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          src={earpieceGirl}
          alt="group of guys on headset"
          className={classes.headsetGuys}
        />

        <DescriptionCard DescriptionCardText="We distribute music across all streaming platforms like Spotify, Audiomack, Apple, YouTube, etc" />
      </div>

      {/* Show for only 540 ends */}

      <div
        className={classes.headsetGuysCon2}
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <DescriptionCard DescriptionCardText="We distribute music across all streaming platforms like Spotify, Audiomack, Apple, YouTube, etc" />

        <img
          src={earpieceGirl}
          alt="group of guys on headset"
          className={classes.headsetGuys}
        />
      </div>

      <div className={classes.getCon}>
        <div>
          <p className={classes.get}>
            Get your music distributed on all streaming platforms for FREE once
            you sign up. Distribute for free first and upgrade later for better
            offers.
          </p>
        </div>
        <div>
          <button className={classes.freeTrialBtn}>Free Trial</button>
        </div>
      </div>

      <div
        id="metrics"
        className={classes.linkCards}
        data-aos="fade-down"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <p className={classes.get2}>
          Join Soundmac today and be heard whilst becoming rich.{" "}
        </p>
        <p className={classes.get3}>
          Start for free, Low pricing, Unlimited distribution and Worlwide
          audience Only On SOUNDMAC
        </p>

        <MediaQuery minWidth={1000}>
          {/* Music Distribution */}
          <LinkCards
            icon={musicDistributionLogo}
            link={"/musicdistribution"}
            iconHeader={"Music distribution"}
            iconSubText={
              "Upload your music instantly to Apple music,Spotify, Beatport, iTunes, Amazon, Tik-Tok, YouTube and hundreds of other digital stores and applications."
            }
          />

          {/* Promotion */}
          <LinkCards
            icon={promotionLogo}
            link={"/promotion"}
            iconHeader={"Promotion"}
            iconSubText={
              "Get your music heard! Soundmac’s  easy-to-use promotional tools get your tracks to the people that matters the most."
            }
          />

          {/* Pricing */}
          <LinkCards
            icon={pricingLogo}
            link={"/pricing"}
            iconHeader={"Pricing"}
            iconSubText={
              "All-inclusive distribution you keep: 90%  revenue share on distribution and also get your music into over 100 partner stores worldwide. "
            }
          />
        </MediaQuery>

        <MediaQuery maxWidth={999}>
          <Splide
            options={{
              rewind: true,
              type: "loop",
              padding: "20%",
              gap: "20px",
              arrows: false,
              pagination: false,
            }}
          >
            <SplideSlide>
              {/* Music Distribution */}
              <LinkCards
                icon={musicDistributionLogo}
                link={"/musicdistribution"}
                iconHeader={"Music distribution"}
                iconSubText={
                  "Upload your music instantly to Apple music,Spotify, Beatport, iTunes, Amazon, Tik-Tok, YouTube and hundreds of other digital stores and applications."
                }
              />
            </SplideSlide>
            <SplideSlide>
              {/* Promotion */}
              <LinkCards
                icon={promotionLogo}
                link={"/promotion"}
                iconHeader={"Promotion"}
                iconSubText={
                  "Get your music heard! Soundmac’s  easy-to-use promotional tools get your tracks to the people that matters the most lorem Lorem ipsum dolor sit amet, consectetur."
                }
              />
            </SplideSlide>
            <SplideSlide>
              {/* Pricing */}
              <LinkCards
                icon={pricingLogo}
                link={"/pricing"}
                iconHeader={"Pricing"}
                iconSubText={
                  "All-inclusive distribution you keep: 90%  revenue share on distribution and also get your music into over 100 partner stores worldwide lorem Lorem ipsum dolor sit amet, consectetur. "
                }
              />
            </SplideSlide>
          </Splide>
        </MediaQuery>
      </div>

      <div
        className={classes.metricsCon}
        data-aos="zoom-in"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        {/* Happy clients */}
        <div className={classes.metrics}>
          <Metrics value={"50+"} category={"Happy Clients"} />
        </div>

        {/* Music Distributed */}
        <div className={classes.metricsWithBorder}>
          <Metrics value={"210+"} category={"Music Distributed"} />
        </div>

        {/* Team Members */}
        <div className={classes.metrics}>
          <Metrics value={"22"} category={"Team Members"} />
        </div>
      </div>

      <div className={classes.largerAudienceCon}>
        <div className={classes.squareAndCircleIcon}>
          <BsClipboardCheck className={classes.big_check} />
        </div>

        {/* Small thick line */}
        <div className={classes.smallThinkLine}></div>

        <div className={classes.largerAudienceText}>
          <h2 className={classes.reachLargerTextA}>
            Your Independence <br /> Is Our Policy
          </h2>
          <br />
          <h2 className={classes.reachLargerText}>
            Sell your music efficiently. <br />
            Earn money without spending money.
          </h2>
          <CheckBullet bulletText={"Spread your music worldwide for FREE"} />

          <CheckBullet
            bulletText={
              "Release your music globally on Spotify, YouTube, Tidal, Audiomack, Apple, etc."
            }
          />

          <CheckBullet
            bulletText={
              "Keep 100% Royalty. You work hard for your music, you deserve it all. "
            }
          />

          <CheckBullet bulletText={"Keep 100% ownership of your music."} />

          {/* <Link className={classes.signUpOrLogIn} to={'/signIn'}>Sign up / Log in</Link> */}
        </div>
      </div>

      <div className={classes.Footer}>
        <Footer />
      </div>

      {modal && <ModalBackground noDeets={showDeets} />}
      {modal && <SignInBox showDeets={showDeets} signUpAt={signUp} />}

      {signUpModal && <ModalBackground noDeets={signUp} />}
      {signUpModal && <SignUp noSignUp={signUp} iHaveAnAcc={sDAndSM} />}
    </div>
  );
}
export default Home;
