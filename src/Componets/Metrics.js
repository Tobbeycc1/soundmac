import classes from '../CSS files/Metrics.module.css'
function Metrics(props) {
    return(
        <div className={classes.metricsCard}>
            <h1>{props.value}</h1>
            <p className={classes.category}>{props.category}</p>
        </div>
    )
   
}
export default Metrics