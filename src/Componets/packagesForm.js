import classes from '../CSS files/packagesForm.module.css'
import DatePickerForm from './DatePicker'
import DatePicker from './DatePicker'
function PackagesForm(props) {
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
    <label className={classes.label}>Artist’s Name</label>
            <input className={classes.smallInput} 
            type={'text'}
            placeholder="Enter your artist's stage name"
            />

    </div>

    <div className={classes.artisteName}>
    <label className={classes.label}>Release Name</label>
            <DatePickerForm/>

    </div>



</div>

            </form>
        </div>
    )
}
export default PackagesForm