import classes from '../CSS files/Dashboard.module.css'
import { username } from '../Componets/dashboardHeader'
import coolGlassesLady from '../images/cool glasses lady.png'
import dashboardIcon from '../images/dashboard Icon.png'
import catalogIcon from '../images/catalog icon.png'
import historyIcon from '../images/history icon.png'
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import { useEffect, useRef, useState } from 'react'
import ClientsMetrics from '../Componets/clientsMetric'


const totalStream = 10000

const pricingPackage = 'Independent Artist'
const myEarningsMoney = '0'





function Dashboard(props) {
    
    const [newSingleOutNow, setnewSingleOut]=useState('New Single Out Now')
    const [bRDP, setBRDP]= useState('Before Release Date + Pre Save')
    const [mVOP, setMVOP]= useState('Music Video + Out Now + Pre Save')
    const [yA, setYA]= useState('YouTube Ads')
    const [sA, setSA] = useState('Spotify Ads')

    const circleFAIcon = {
        color:'white',
        display: 'inline-block',
        position: 'relative',
        top: '50%',
        mstransform: 'translateY(-50%)',
        transform: 'translateY(-50%)',
     display: 'inline-block',
     
    }


   

    return(
    <div className={classes.dashboardCon}>

        <div className={classes.confidentPhraseAndImageCon}>

            <div className={classes.confidentPhrase}>
                <h1 className={classes.usernameConfidentPhrase}> <span className={classes.username}>{username},</span>we are confident <br/>
            your music is getting the required attention</h1>

               <ClientsMetrics/>
                <h3 className={classes.pricingPackage}>{pricingPackage}</h3>
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

                <Link to={'/catalog'}
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
                
                 <Link to={'/history'}
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
  <h2><NumberFormat className={classes.totalSreamNumber} value={totalStream} displayType={'text'} thousandSeparator={true} /></h2>
  <div className={classes.addNewMedia}>total stream</div>
</div>

<div  className={classes.totalSreamConB}>

  <Link to={'/dashboard'} className={classes.linlToAddTrack}><i class="fi-xwsux2-plus-solid"
style={{ color:'green'}}></i>
  <div className={classes.addNewMedia} >add new track</div></Link>

  {/* add video */}
  <Link to={'/dashboard'} className={classes.linlToAddTrackB}><i class="fi-xwsux2-plus-solid"
style={{ color:'green'}}></i>
  <div className={classes.addNewMedia}>add new video</div></Link>

</div>




</div>
         </div> 
         <h2>Active*</h2>

         <div className={classes.allActivePackageCon}>
            <div className={classes.allActivePackageSubCon}>
                
            {/* New Single Out Now' */}
                <div className={`${newSingleOutNow === 'New Single Out Now' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
                <i class="fa-solid fa-circle" style={circleFAIcon}></i>    <h2 className={classes.dashBoardPackageText}>   {newSingleOutNow}</h2>
                
                <i class="fa-solid fa-x" style={circleFAIcon}></i>
                </div>

            {/* Before Release Date + Pre Save */}
            <div className={`${bRDP === 'Before Release Date + Pre Save' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
            <i class="fa-solid fa-circle" style={circleFAIcon}></i>     <h2 className={classes.dashBoardPackageText}>{bRDP}</h2>
                </div>

          {/* Music Video + Out Now + Pre Save */}
          <div className={`${mVOP === 'Music Video + Out Now + Pre Save' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
          <i class="fa-solid fa-circle" style={circleFAIcon}></i>   <h2 className={classes.dashBoardPackageText}>{mVOP}</h2>
                </div>

{/* YouTube Ads */}
          <div className={`${yA === 'YouTube Ads' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
          <i class="fa-solid fa-circle" style={circleFAIcon}></i> <h2 className={classes.dashBoardPackageText}>{yA}</h2>
                </div>

        {/* Spotify Ads */}
        <div className={`${sA === 'Spotify Ads' ? classes.packageDivCon: classes.packageDivConNoDisplay }`}>
        <i class="fa-solid fa-circle" style={circleFAIcon}></i>  <h2 className={classes.dashBoardPackageText}>{sA}</h2>
                </div>

    
            


           </div>

         </div>
        
        
         
          </div>






        </div>

        <div className={classes.myEarningsMoneyDiv}>
            <div className={classes.myEarningsMoneySubDiv}>
            <h1 ><NumberFormat className={classes.myEarningsMoney} value={myEarningsMoney} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h1>
            <h3>My Earnings</h3>
            </div>
            
        </div>



     </div>
    )
}
export default Dashboard