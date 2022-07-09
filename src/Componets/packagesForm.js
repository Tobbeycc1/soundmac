import { useRef, useState } from 'react';
import classes from '../CSS files/packagesForm.module.css'
import DatePickerForm from './DatePicker'


function PackagesForm(props) {

    const checkBoxA= useRef()
    const checkBoxB= useRef()
    const checkBoxC= useRef()
    const checkBoxD= useRef()
    const checkBoxE= useRef()
    

    


const [newSingleSummary, setNewSingleSummary]= useState(false)
const [beforeReleaseSummary, setBeforeReleaseSummary]= useState(false)
const [musicVideoOutSummary, setMusicVideoOutSummary]= useState(false)




// new single out now cart summary JSX 
const newSingleJSX =  <div className={classes.newSingleJSXCon}> <h4 className={classes.newSingleJSXHeader}>New Single Out Now </h4> <h3>$ <span>750</span> </h3> </div>

// Before Release Date + Pre Save JSX 
const beforeReleaseJSX =  <div className={classes.newSingleJSXCon}> <h4 className={classes.newSingleJSXHeader}>Before Release Date + Pre Save </h4> <h3>$ <span>850</span> </h3> </div>

// Music Video + Out Now + Pre Save JSX 
const musicVideoOutJSX =  <div className={classes.newSingleJSXCon}> <h4 className={classes.newSingleJSXHeader}>Music Video + Out Now + Pre Save</h4> <h3>$ <span>1000</span> </h3> </div>



    //if check boxes are checked
    function handleChange() {
        
        if (checkBoxA.current.checked) {
            console.log('AAAAAAA');
            setNewSingleSummary(true)
            
        } else{
            console.log('false AAAAAAA');
            setNewSingleSummary(false)
        }
        

         if (checkBoxB.current.checked) {
            console.log('BBBBBBBBBB');
            setBeforeReleaseSummary(true)
            
        }
        else{
            console.log('false BBBBBB');
            setBeforeReleaseSummary(false)
        }
        if (checkBoxC.current.checked) {
            console.log('CCCCCCCCC');
            setMusicVideoOutSummary(true)
            
        }
        
       

        
        
    } 

   
    return(
        <div className={classes.packagesFormCon}>
            <h3 className={classes.formHeader}>Book Your Digital Marketing Package</h3>

            <h3 className={classes.personalDetails}>Personal Details</h3>
            <p className={classes.ensure}>Kindly ensure that all details you input are correct</p>

            <form>
            <label className={classes.label}>Your Full Name <span className={classes.italics}>(Surname Other name First name)</span></label>
            <input className={classes.input} 
            type={'text'}
            placeholder='Enter your full name '
            />

{/* Artiste & release Name */}
<div className={classes.artisteReleaseName}>
    <div className={classes.artisteName}>
    <label className={classes.label}>Artist’s Name</label>
            <input className={classes.smallInput} 
            type={'text'}
            placeholder="Enter your artist's stage name"
            />

    </div>

    <div className={classes.artisteName}>
    <label className={classes.label}>Release Name</label>
            <input className={classes.smallInput} 
            type={'text'}
            placeholder="Enter a name you wish to appear "
            />

    </div>



</div>
            

{/* E-mail Address & release Date */}
<div className={classes.artisteReleaseName}>
    <div className={classes.artisteName}>
    <label className={classes.label}>E-mail Address</label>
            <input className={classes.smallInput} 
            type={'text'}
            placeholder="Enter your e-mail address"
            />

    </div>

    <div className={classes.artisteName}>
    <label className={classes.label}>Release Name</label>
            <DatePickerForm/>

    </div>



</div>

{/* Faceebook url */}
<label className={classes.label}>Facebook Page URL</label>
            <input className={classes.input} 
            type={'url'}
            placeholder=' e.g http://www.facebook.com/soundmac '
            />

{/* Instagram Handle */}
<label className={classes.label}>Instagram Handle</label>
            <input className={classes.input} 
            type={'text'}
            placeholder='e.g Sound_Mac'
            />

            {/* Package Details Section */}
            
            <h3 className={classes.personalDetails}>Package Details</h3>
            <a href='#checkOur' className={classes.ensure}>Kindly ensure that all details you input are correct</a>

        {/* Select a package */}
<label className={classes.label}>Select A Package</label>

                <div className={classes.inputButDiv}>

    <div className={classes.checkBoxDatalistCon}>
    <input onChange={handleChange} ref={checkBoxA} type={'checkbox'} id='New-Single-Out-Now' value={700} /> <label className={classes.checkBoxLabel}>New Single Out Now</label> <br/>
    <input onChange={handleChange} ref={checkBoxB} type={'checkbox'} id='Before-Release-Date-Pre Save' value={850} /> <label className={classes.checkBoxLabel}>Before Release Date + Pre Save</label> <br/>
    <input onChange={handleChange} ref={checkBoxC}type={'checkbox'} id='Music-Video-Out-Now-Pre Save' value={1000} /> <label className={classes.checkBoxLabel}>Music Video + Out Now + Pre Save</label> <br/>
    <input onChange={handleChange} ref={checkBoxD} type={'checkbox'} id='YouTube-Ads' value={700} /> <label className={classes.checkBoxLabel}>YouTube Ads</label> <br/>
    <input onChange={handleChange} ref={checkBoxE} type={'checkbox'} id='Spotify Ads' value={1000} /> <label className={classes.checkBoxLabel}>Spotify Ads</label> <br/>
</div>
                
                </div>
                


                 {/* Cart Summary */}
            
            <h3 className={classes.cartSummaryHeader}>Cart Summary</h3>
            
            {newSingleSummary && newSingleJSX}
            {beforeReleaseSummary && beforeReleaseJSX}
            {musicVideoOutSummary && musicVideoOutJSX}

            </form>
        </div>
    )
}
export default PackagesForm