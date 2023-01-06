import Link from 'next/link'
/* STYLES */
import styles from '../styles/Info.module.css'

const Info = (props) => {

    return (
        <>
            <h3>Más información</h3>
            <div className={styles.contact_item}>

                <a
                    href="https://goo.gl/maps/svdAaoiHsp77zHiUA"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-geo-alt-fill"></i>
                    Local ACJ, Urbanización Villa María, José Agustín Arango, Río Abajo, Ciudad Panamá
                </a>
            </div>
            <div className={styles.contact_item}>
                <a href="tel:+50767780290">
                    <i className="bi bi-telephone-forward-fill"></i>
                    221-2880
                </a>
            </div>
            <div className={styles.contact_item}>
                <a
                    href="mailto:conomovil_pa@yahoo.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="bi bi-envelope-fill"></i>
                    conomovil_pa@yahoo.com
                </a>
            </div>
            <p>{props.text}</p>
        </>
    )
}

export default Info;