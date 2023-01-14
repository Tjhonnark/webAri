import Link from 'next/link'
/* STYLES */
import styles from '../styles/Burger.module.css'

export default function Burger() {
    return (
        <div>
            <div className={styles.menu}>
                <input id="menu__toggle" className={styles.menu__toggle} type="checkbox" />
                <label className={styles.menu__btn} htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className={styles.menu__box}>
                    <li><Link className={styles.menu__item} href="/">Inicio</Link></li>
                    <li><Link className={styles.menu__item} href="/about">¿Quiénes somos?</Link></li>
                    <li><Link className={styles.menu__item} href="/products">Productos</Link></li>
                    <li><Link className={styles.menu__item} href="/contact">Contactos</Link></li>
                </ul>
            </div>
        </div>
    )
}