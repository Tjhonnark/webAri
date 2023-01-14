import Link from 'next/link'
import Image from 'next/image'
/* STYLES */
import styles from '../styles/Burger.module.css'

export default function Burger({ styleBurger }) {
    return (
        <div>
            <div className={styles.menu}>
                <input id="menu__toggle" className={styles.menu__toggle} type="checkbox" />
                <label className={styleBurger ? styles.menu__btn : styles.menu__btn2} htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className={styleBurger ? styles.menu__box2 : styles.menu__box}>
                    <Image
                        src="/logo.png"
                        className={styles.logo}
                        alt=""
                        width={100}
                        height={100} />
                    <li><Link className={styles.menu__item} href="/">Inicio</Link></li>
                    <li><Link className={styles.menu__item} href="/about">¿Quiénes somos?</Link></li>
                    <li><Link className={styles.menu__item} href="/products">Productos</Link></li>
                    <li><Link className={styles.menu__item} href="/contact">Contactos</Link></li>
                </ul>
            </div>
        </div>
    )
}