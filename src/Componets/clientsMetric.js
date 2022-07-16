import classes from '../CSS files/clientsMetric.module.css'

const noOfTracks = 10
const noOfVideos = 5
const noOfLabel = 0

function ClientsMetrics(props) {
    return(
        <div>
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
    )
}
export default ClientsMetrics