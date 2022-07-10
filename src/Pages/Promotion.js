import Footer from "../Componets/Footer"
import PackageDetails from "../Componets/packageDetails"
import PackagesForm from "../Componets/packagesForm"
import classes from '../CSS files/Promotion.module.css'
import megaphoneHand from '../images/megaphoneHand.png'
function Promotion(props) {
    return(
        <div>
            
            <div className={classes.megaphoneBackground}>

            <h2 className={classes.header}>We offer Digital Marketing, Built for musicians</h2>

            <p className={classes.text}>Increase awareness of your latest release, tour, video and <br/> raise your social profile by chatting to our expert Digital Marketing team.</p>
            </div>
            
            
            <div className={classes.purpleBackground}>

            <div className={classes.purpleBackgroundSubCon}>
                 <div className={classes.purpleBackgroundTextCon} >
                  <h1 className={classes.purpleBackgroundHeader}><span className={classes.purpleBackgroundCreate}>CREATE</span> new fans <br/>
Via social campaign</h1>  
<p className={classes.purpleBackgroundText}>Every campaign is handled by soundMac operational teams that uses <br/>
strategic implementation and includes advanced audience building expertise.<br/>
We're are the best spot to reach your fans, so you can focus on your music.</p>

                </div>
                <img className={classes.megaphoneHand} src={megaphoneHand} alt={'Megaphone Hand'}/>
           
            </div> 
            </div>


            <div className={classes.checkOur}>
            <h2 id="checkOur">Check out our <br/>
packages below and select what suites you.</h2>

<p className={classes.checkOurText}>All prices include ad placement and strategy, spend, digital marketing consultation and end of campaign reporting. Please note the 
required assets and specifications our team need from you to kick off the campaign.</p>
            </div >

            <div className={classes.packageAndFormCon}>

            <div className={classes.allPackagesCon}>
            {/* New Single Out Now */}
        <div className={classes.packageDetails}>
                <PackageDetails
                packageName={'New Single Out Now'}
                packageDetailsText={'If you released within the last month and you want to build your audience while driving traffic to streaming services, this package is for you.'}
                packageDetailsSubTextA={'- a paid campaign on Facebook / instagram, linking your fans directly to your content.'}
                packageDetailsSubTextB={'- reach more fans on release day, locally and internationally to drive streaming numbers.'}
                packageDetailsSubTextC={'- stay up-to-date with our campaign performance with daily updates and end of campaign report.'}
                packageOldPrice={'  $ 820  '}
                packagenewPrice= {' $ 700'}
                priceIncludes= {' Price includes $550 ad spend.'}

                />
              </div>

                {/* Before Release Date + Pre Save*/}
              <div className={classes.packageDetails}>
                <PackageDetails
                packageName={'Before Release Date + Pre Save'}
                packageDetailsText={'Promote your music before and after release. All the elements of an Out Now campaign with a pre-save to build hype. Best booked three or more weeks before release date.'}
                packageDetailsSubTextA={'- a paid campaign on Facebook / instagram, linking your fans directly to your content.'}
                packageDetailsSubTextB={'- reach more fans on release day, locally and internationally to drive streaming numbers.'}
                packageDetailsSubTextC={'- stay up-to-date with our campaign performance with daily updates and end of campaign report.'}
                packageDetailsSubTextD={'- promote your music before it live with a pre-save link which drives fan engagement and build hype into your release'}
                packageOldPrice={'  $ 900  '}
                packagenewPrice= {' $ 850'}
                priceIncludes= {' Price includes $650 ad spend.'}

                />
              </div>

                {/*Music Video + Out Now + Pre Save*/}
                <div className={classes.packageDetails}>
                <PackageDetails
                packageName={'Music Video + Out Now + Pre Save'}
                packageDetailsText={'a paid campaign on Facebook / instagram promoting your music video and driving traffic to streaming services.'}
                packageDetailsSubTextA={'- a paid campaign on Facebook / instagram, linking your fans directly to your content.'}
                packageDetailsSubTextB={'- reach more fans on release day, locally and internationally to drive streaming numbers.'}
                packageDetailsSubTextC={'- stay up-to-date with our campaign performance with daily updates and end of campaign report.'}
                packageDetailsSubTextD={"- promote your music before it's live with a pre-save link which drives fan engagement and build hype into your release"}
                packageOldPrice={'  $ 1,100  '}
                packagenewPrice= {' $ 1,000'}
                priceIncludes= {' Price includes $850 ad spend.'}

                />
              </div>

                {/*YouTube Ads*/}
                <div className={classes.packageDetails}>
                <PackageDetails
                packageName={'YouTube Ads'}
                packageDetailsText={'Promote your video to a targeted audience on YouTube.'}
                packageDetailsSubTextA={'- a paid campaign on Facebook / instagram, linking your fans directly to your content.'}
                packageDetailsSubTextB={'- drive video views and find like-minded audiences with our expert targeting methods.'}
                packageDetailsSubTextC={'- expand your visual presence on YouTube and increase brand awareness.'}
                packageDetailsSubTextD={'- stay up-to-date with our campaign performance with daily updates and end of campaign report while benefitting from ongoing support.'}
                packageOldPrice={'  $ 800  '}
                packagenewPrice= {' $ 700'}
                priceIncludes= {' Price includes $500 ad spend.'}

                />
              </div>

               {/*Spotify Ads*/}
               <div className={classes.packageDetails}>
                <PackageDetails
                packageName={'Spotify Ads'}
                packageDetailsText={'Promote your single, album or playlist directly on Spotify with audio and/or video ads. This campaign works best with content less than a month from release.'}
                packageDetailsSubTextA={"- record and promote an audio message to air on Spotify's free tier in between songs or use a promo video to drive impressions."}
                packageDetailsSubTextB={'- target fans directly on the platform where they consume their music and take advantage of granular targeting options.'}
                packageDetailsSubTextC={'- tay up-to-date with our campaign performance with daily updates and end of campaign report while benefitting from ongoing support.'}
                packageDetailsSubTextD={'- Enjoy increased brand awareness for your project'}
                packageOldPrice={'  $ 1,200  '}
                packagenewPrice= {' $ 1,00'}
                priceIncludes= {' Price includes $550 ad spend.'}

                />
              </div>
            </div>
        

              <div className={classes.formCon}>
                <PackagesForm/>
              </div>
            </div>

            <Footer/>
              
            
        </div>
    )
}
export default Promotion