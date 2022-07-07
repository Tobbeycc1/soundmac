import Header from "../Componets/Header"
import classes from '../CSS files/Promotion.module.css'
import megaphoneHand from '../images/megaphoneHand.png'

function Promotion(props) {
    return(
        <div>
            <Header/>
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
            <h2>Check out our <br/>
packages below and select what suites you.</h2>

<p className={classes.checkOurText}>All prices include ad placement and strategy, spend, digital marketing consultation and end of campaign reporting. Please note the 
required assets and specifications our team need from you to kick off the campaign.</p>
            </div>
              
        </div>
    )
}
export default Promotion