import { Link } from 'react-router-dom'
import classes from '../CSS files/Home.module.css'
import speaker from '../images/speaker.png'
import musicAppLogos from '../images/music app logos.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import LinkCards from '../Componets/LinkCards'
import musicDistributionLogo from '../images/music distribution icon.png'
import promotionLogo from '../images/promotion icon.png'
import pricingLogo from '../images/pricing icon.png'
import Metrics from '../Componets/Metrics'
import CheckBullet from '../Componets/check bukket'
import Footer from '../Componets/Footer'
import MusicDistribution from '../Componets/MusicDistribution';
import MediaQuery from 'react-responsive'
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../index.css'
import bigCheck from '../images/big check.png'
import qM from '../images/qm.png'
import Marquee from "react-fast-marquee";
import { useState } from "react";
import ModalBackground from "../Componets/ModalBackground";
import SignInBox from "../Componets/SignInBox";
import SignUp from "../Componets/SignUp";

// ..
AOS.init();

const checkStyles= {
    // fontSize:'274px',
    color: 'var(--yellow)',
    textAlign: 'center',
    marginTop: '25%',
    background: 'white',
    borderRadius: '100%'

    
}

function Home(props) {

  const [modal, showModal]=useState(false)

  const [signUpModal, showSignupModal]= useState(false)

   function showDeets() {
      console.log('Login shown');
      showModal(!modal)
      
  }
  function signUp() {
      console.log('signUp shown');
      showSignupModal(!signUpModal)
      showModal(false)
      
  }
 
  function sDAndSM() {
      showModal(true)
      showSignupModal(false)

  }


    return(
        <div className={classes.homeCon}>
    

        <div className={classes.homeCard1}>
        <div className={classes.signInAndSpeakerCon}>
           <div className={classes.signInCon}>
           <span to={'/myportal'} className={classes.signIn} onClick={signUp}> SIGN UP <br/> FOR FREE</span>
            <div>
            <p className={classes.horizontalLine}></p> <h2 className={classes.login} onClick={showDeets}>or Login</h2> <p className={classes.horizontalLineB}></p>
            </div>
           </div>

            <div className={classes.speakerCon}>
            <img src={speaker} alt='speaker' className={classes.speakerImg}/>
            </div>

         </div>
        </div>
        
  
        
<div className={classes.relative}>

</div>
         {/* Body */}
         <div id='musicDistribution' className={classes.earnCon} >
            <div >
                
                <MusicDistribution/>
                </div>
                

                <Marquee>
 <p className={classes.aB}>ABOUT US</p>
 <p className={classes.aB}>ABOUT US</p>
 <p className={classes.aB}>ABOUT US</p>
</Marquee>

                <div className={classes.newAboutusCon}>
                  <img src={qM} alt={'question mark'} className={classes.qM} />

        <div className={classes.mobileBG}>

        </div>

                  <p className={classes.newAboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis lorem,
placerat non purus sit amet, ultrices dapibus mi. Pellentesque quis dui ligula. 
volutpat nibh hendrerit, rhoncus dolor mattis, aliquam felis. Nulla tristique lacus 
eget magna fermentum interdum. Suspendisse molestie luctus diam, vitae convallis 
arcu varius a. Vivamus lobortis posuere magna, at interdum dolor malesuada vel. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse turpis lorem,
placerat non purus sit amet, ultrices dapibus mi. Pellentesque quis dui ligula. 
volutpat nibh hendrerit, rhoncus dolor mattis, aliquam felis. Nulla tristique lacus 
eget magna fermentum interdum. Suspendisse molestie luctus diam, vitae convallis 
arcu varius a. Vivamus lobortis posuere magna, at interdum dolor malesuada vel.</p>
                </div>
{/* <div className={classes.scrollContainer} >
  <h1 className={classes.aB} >ABOUT US</h1>
</div> */}
                
 {/* About Us */}
{/* <div id='about' data-aos="fade-down" data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out">
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
arcu varius a. Vivamus lobortis posuere magna, at interdum dolor malesuada vel. </p>
 </div>   
</div> */}
 

            </div>
            
            <div id='metrics' className={classes.linkCards}
            data-aos="fade-down" data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            >
          

            <MediaQuery minWidth={1000}>

              {/* Music Distribution */}
            <LinkCards
             icon={musicDistributionLogo}
             link={'/musicdistribution'}
             iconHeader={'Music distribution'}
             iconSubText={'Upload your music instantly to Apple music,Spotify, Beatport, iTunes, Amazon, Tik-Tok, YouTube and hundreds of other digital stores and applications.'}
             />

             {/* Promotion */}
            <LinkCards
             icon={promotionLogo}
             link={'/promotion'}
             iconHeader={'Promotion'}
             iconSubText={'Get your music heard! Soundmac’s  easy-to-use promotional tools get your tracks to the people that matters the most.'}
             />

             {/* Pricing */}
            <LinkCards
             icon={pricingLogo}
             link={'/pricing'}
             iconHeader={'Pricing'}
             iconSubText={'All-inclusive distribution you keep: 90%  revenue share on distribution and also get your music into over 100 partner stores worldwide. '}
             />
             
            </MediaQuery>
           

           <MediaQuery maxWidth={999}>
            
           <Splide
   options={ {
    rewind: true,
    type   : 'loop',
    padding: '20%',
    gap:'20px',
    arrows: false,
    pagination: false
    
  } }
      
    >
      <SplideSlide>
        {/* Music Distribution */}
        <LinkCards
             icon={musicDistributionLogo}
             link={'/musicdistribution'}
             iconHeader={'Music distribution'}
             iconSubText={'Upload your music instantly to Apple music,Spotify, Beatport, iTunes, Amazon, Tik-Tok, YouTube and hundreds of other digital stores and applications.'}
             />
      </SplideSlide>
      <SplideSlide>
        {/* Promotion */}
        <LinkCards
             icon={promotionLogo}
             link={'/promotion'}
             iconHeader={'Promotion'}
             iconSubText={'Get your music heard! Soundmac’s  easy-to-use promotional tools get your tracks to the people that matters the most lorem Lorem ipsum dolor sit amet, consectetur.'}
             />
      </SplideSlide>
      <SplideSlide>
        {/* Pricing */}
        <LinkCards
             icon={pricingLogo}
             link={'/pricing'}
             iconHeader={'Pricing'}
             iconSubText={'All-inclusive distribution you keep: 90%  revenue share on distribution and also get your music into over 100 partner stores worldwide lorem Lorem ipsum dolor sit amet, consectetur. '}
             />
      </SplideSlide>
    </Splide>
           
           </MediaQuery>

            

             
            </div>  
       
        <div className={classes.metricsCon}
        data-aos="zoom-in" data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        >
        {/* Happy clients */}
        <div className={classes.metrics}>
        <Metrics
        value={'50+'}
        category={'Happy Clients'}
        />    
        </div>   

        {/* Music Distributed */}
        <div className={classes.metricsWithBorder}>
        <Metrics
        value={'210+'}
        category={'Music Distributed'}
        />    
        </div>    

        {/* Team Members */}
        <div className={classes.metrics}>
        <Metrics
        value={'22'}
        category={'Team Members'}
        />    
        </div>          
        </div> 

        <div className={classes.largerAudienceCon}>
        
        <div className={classes.squareAndCircleIcon}>
            <img src={bigCheck} className={classes.bigCheck} alt='big check icon'/>
        </div>
       

        
        
      
            
            {/* Small thick line */}
        <div className={classes.smallThinkLine}></div>

        <div className={classes.largerAudienceText}>
            <h2 className={classes.reachLargerTextA}>Your Independence <br/> Is Our Policy</h2>
            <br/>
            <h2 className={classes.reachLargerText}>Reach larger audience, let get your <br/>
music available across over 120<br/>
music streaming platforms</h2>
<CheckBullet
bulletText={'Distribute your music to hundreds of stores worldwide'}
/>

<CheckBullet
bulletText={'Stress free point-and-vlick royalty management'}
/>

<CheckBullet
bulletText={'Reach millions of new listeners'}
/>

<CheckBullet
bulletText={'The best support worldwide'}
/>

<CheckBullet
bulletText={'Keep major share of your music royalty'}
/>
{/* <Link className={classes.signUpOrLogIn} to={'/signIn'}>Sign up / Log in</Link> */}
        </div>

        </div>
          
          <div className={classes.Footer}>
          <Footer/>
          </div>
          
          {modal && <ModalBackground noDeets={showDeets} /> }
            {modal && <SignInBox showDeets={showDeets} signUpAt={signUp}/> }
           
            {signUpModal && <ModalBackground noDeets={signUp} /> }
            {signUpModal && <SignUp noSignUp={signUp} iHaveAnAcc={sDAndSM}/> }
         

        </div>
    )
}
export default Home