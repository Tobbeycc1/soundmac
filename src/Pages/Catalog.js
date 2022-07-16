import ClientsMetrics from '../Componets/clientsMetric'
import classes from '../CSS files/catalog.module.css'
function Catalog(props) {
    return(
        <div className={classes.catalogCon}>
            <h1 className={classes.usernameConfidentPhrase}>CATALOG</h1>
            <ClientsMetrics/>
        </div>
    )
}
export default Catalog