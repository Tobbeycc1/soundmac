import classes from '../CSS files/clientsMetric.module.css'

const noOfTracks = 10
const noOfVideos = 5
const noOfLabel = 0

function ClientsMetrics(props) {
    return(
        <div>
             <div className={classes.tracks}>
                    <h2 className={classes.nos}>{noOfTracks}</h2>
                    <h3 className={classes.noText}>tracks</h3>
                </div>

                <div className={classes.tracks}>
                    <h2 className={classes.nos}>{noOfVideos}</h2>
                    <h3 className={classes.noText}>videos</h3>
                </div>

                <div className={classes.label}>
                    <h2 className={classes.nos}>{noOfLabel}</h2>
                    <h3 className={classes.noText}>label</h3>
                </div>
        </div>
    )
}
export default ClientsMetrics