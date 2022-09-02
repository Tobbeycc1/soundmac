
import classes from '../CSS files/SignInBox.module.css'
function SignInBox(props) {
    return(
        <div className={classes.SignInBoxDiv}>
            <div className={`${classes.SignInBox} animate__animated animate__rubberBand`} >
            <div className={classes.x}>X</div>
        </div>
        </div>
    )
}
export default SignInBox