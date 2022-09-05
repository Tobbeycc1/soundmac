import classes from '../CSS files/inputSignIn.module.css'
function InputSignIn(props) {
    return(
        <div className={classes.formCon}>
            <label className={classes.label}>{props.icon} </label>
            <input className={classes.Input} type={props.type} placeholder={props.placeholder}/> <br/>
            
            
            
        </div>
    )
}
export default InputSignIn 