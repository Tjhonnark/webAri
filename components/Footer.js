import Link from 'next/link'
import { useState } from 'react';
/* COMPONENTS */
import Forms from '../components/Forms.js';
import FormSend from '../components/modals/FormSend.js';
/* DATA */

/* STYLES */
import styles from '../styles/Footer.module.css';

export default function Footer(props) {

    const [modalFormSend, setModalFormSend] = useState(false);

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.linkPages}>
                    <h4>Páginas</h4>
                    <div className={styles.itemPages}>
                        <Link href="/">
                            {/* aria-current="page"> */}<i className="bi bi-house-fill"></i>Inicio
                        </Link>
                    </div>
                    <div className={styles.itemPages}>
                        <Link href="/quien">
                            <i className="bi bi-people-fill"></i>¿Quién?
                        </Link>
                    </div>
                    <div className={styles.itemPages}>
                        <Link href="/haceres">
                            <i className="bi bi-box-seam"></i>Haceres
                        </Link>
                    </div>
                    <div className={styles.itemPages}>
                        <Link href="/tallercultura">
                            <i className="bi bi-envelope-paper-fill"></i>Taller cultura
                        </Link>
                    </div>
                    <div className={styles.itemPages}>
                        <Link href="/contact">
                            <i className="bi bi-envelope-paper-fill"></i>Blog / Contacto
                        </Link>
                    </div>
                </div>
                <div className={styles.linkSection}>
                    <h4>Secciones</h4>
                    <div className={styles.itemSection}>

                        <a href={props.page + "#section1"} aria-current="page">{props.section1}</a>

                    </div>
                    <div className={styles.itemSection}>

                        <a href={props.page + "#section2"} aria-current="page">{props.section2}</a>

                    </div>
                    <div className={styles.itemSection}>

                        <a href={props.page + "#section3"} aria-current="page">{props.section3}</a>

                    </div>
                    <div className={styles.itemSection}>

                        <a href={props.page + "#section4"} aria-current="page">{props.section4}</a>

                    </div>
                </div>
                <div className={styles.contact_form}>
                    <Forms modalFormSend={modalFormSend} setModalFormSend={setModalFormSend} />
                </div>
                <FormSend modalFormSend={modalFormSend} setModalFormSend={setModalFormSend} />
            </div>
            <div className={styles.webapp}>
                <a
                    href="https://www.tjhonnar.ga"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <h3 className={styles.webapp_title}>7hoSoft</h3>
                </a>
            </div>
        </footer>
    )
}