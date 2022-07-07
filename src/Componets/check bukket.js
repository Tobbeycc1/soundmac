import classes from'../CSS files/checlbullet.module.css'

const checkStyles= {
    fontSize:'13px',
    color: 'var(--yellow)',
    textAlign: 'center',
    marginTop: '25%',
    background: 'white',
    borderRadius: '100%'
}
function CheckBullet(props) {
    return(
        <div>
         <div className={classes.squareAndCircleIcon}>
            <i class="fa-solid fa-circle-check"
            style={checkStyles}
            ></i>
            </div>   
            <p className={classes.bulletText}>{props.bulletText}</p>
        </div>
        
    )
}
export default CheckBullet