/* STYLES */
import styles from '../styles/MapView.module.css'

const MapView = () => {

    return (
        <>
            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d985.0935028349031!2d-79.478143!3d9.029605!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2spa!4v1672945076903!5m2!1ses!2spa"
             width="100%" height="100%" className={styles.map}
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
             </iframe>
        </>
    )
}

export default MapView;

