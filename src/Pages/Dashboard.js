import classes from '../CSS files/Dashboard.module.css'
import { username } from '../Componets/dashboardHeader'
import coolGlassesLady from '../images/cool glasses lady.png'
import dashboardIcon from '../images/dashboard Icon.png'
import catalogIcon from '../images/catalog icon.png'
import historyIcon from '../images/history icon.png'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import { useEffect, useRef, useState } from 'react'

const noOfTracks = 10
const noOfVideos = 5
const noOfLabel = 0
const totalStream = 1000





function Dashboard(props) {
    
    const [newSingleOutNow, setnewSingleOut]=useState('New Single Out Now')
    const [bRDP, setBRDP]= useState('Before Release Date + Pre Save')
    const [mVOP, setMVOP]= useState('Music Video + Out Now + Pre Save')
    const [yA, setYA]= useState('YouTube Ads')
    const [sA, setSA] = useState('Spotify Ads')


   

    return(
    <div className={classes.dashboardCon}>

        <div className={classes.confidentPhraseAndImageCon}>

            <div className={classes.confidentPhrase}>
                <h1 className={classes.usernameConfidentPhrase}> <span className={classes.username}>{username},</span>we are confident <br/>
            your music is getting the required attention</h1>

                <div className={classes.tracks}>
                    <h2>{noOfTracks}</h2>
                    <h3>tracks</h3>
                </div>

                <div className={classes.tracks}>
                    <h2>{noOfVideos}</h2>
                    <h3>videos</h3>
                </div>

                <div className={classes.label}>
                    <h2>{noOfLabel}</h2>
                    <h3>label</h3>
                </div>
            </div>

            <div className={classes.coolGlassesLady}>
            <img 
            src={coolGlassesLady} 
            alt='Cool Glasses Lady'      
            />
            </div>
           
            


        

        </div>

        {/* dashboard */}

        <div className={classes.dashboardAndIconsCon}>

            <div className={classes.dashboardIconsCon}>

                <div className={classes.dashboardIconsSubConSpecial}>
                    <img className={classes.dashboardIconImage} alt='grid box' src={dashboardIcon}/>
                    <div className={classes.dashboardiconTextCon}>
                        <h2>Dashboard</h2>
                        <div>Lorem ipsum dolor</div>
                    </div>

                </div>

                {/* catalog icon */}

                <Link to={'/dashboard'}
                className={classes.dashBoardIconLink} >
                <div className={classes.dashboardIconsSubCon}>
                    <img className={classes.dashboardIconImage} src={catalogIcon} alt='catalog icon'/>
                    <div className={classes.dashboardiconTextCon}>
                        <h2>Catalog</h2>
                        <div>Lorem ipsum dolor</div>
                    </div>

                </div>
                </Link>

                 {/* history icon */}
                
                 <Link to={'/dashboard'}
                className={classes.dashBoardIconLink} >
                <div className={classes.dashboardIconsSubCon}>
                    <img className={classes.dashboardIconImage} src={historyIcon} alt='catalog icon'/>
                    <div className={classes.dashboardiconTextCon}>
                        <h2>History</h2>
                        <div>Lorem ipsum dolor</div>
                    </div>

                </div>
                </Link>


            </div>
          
          {/* Total stream upload and active  */}

          <div className={classes.totalStreamUploadAndActiveCon}>

         
         <div className={classes.totalStreamAndUploadUpOnlyCon}>
         <div className={classes.totalStreamAndUploadCon}>

<div  className={classes.totalSreamCon}>
  <h2><NumberFormat className={classes.totalSreamNumber} value={totalStream} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h2>
  <div>total stream</div>
</div>

<div  className={classes.totalSreamConB}>

  <Link to={'/dashboard'} className={classes.linlToAddTrack}><i class="fi-xwsux2-plus-solid"
style={{ color:'green'}}></i>
  <div>add new track</div></Link>

  {/* add video */}
  <Link to={'/dashboard'} className={classes.linlToAddTrackB}><i class="fi-xwsux2-plus-solid"
style={{ color:'green'}}></i>
  <div>add new video</div></Link>

</div>




</div>
         </div> 
         <h2>Active*</h2>

         <div className={classes.allActivePackageCon}>
            <div className={classes.allActivePackageSubCon}>
                
            {/* New Single Out Now' */}
                <div className={`${newSingleOutNow === 'New Single Out Now' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
                    <h2 className={classes.dashBoardPackageText}> <sup className={classes.oIcon}>o</sup>  {newSingleOutNow}</h2>
                </div>

            {/* Before Release Date + Pre Save */}
            <div className={`${bRDP === 'Before Release Date + Pre Save' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
                    <h2 className={classes.dashBoardPackageText}>{bRDP}</h2>
                </div>

          {/* Music Video + Out Now + Pre Save */}
          <div className={`${mVOP === 'Music Video + Out Now + Pre Save' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
                    <h2 className={classes.dashBoardPackageText}>{mVOP}</h2>
                </div>

{/* YouTube Ads */}
          <div className={`${yA === 'YouTube Ads' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
                    <h2 className={classes.dashBoardPackageText}>{yA}</h2>
                </div>

        {/* Spotify Ads */}
        <div className={`${sA === 'Spotify Ads' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
                    <h2 className={classes.dashBoardPackageText}>{sA}</h2>
                </div>

    
            


           </div>

         </div>
        
        
         
          </div>






        </div>



     </div>
    )
}
export default Dashboard