import Link from 'next/link';
import Image from 'next/image';
/* COMPONENTS */
import Burger from './Burger'
/* STYLES */
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

  const link = () => {
    var sound = new Audio('sounds/close.wav')
    sound.play()
  }

  return (
    <nav className={styles.header}>
      <div className={styles.container}>
        <Image
          src="/logo.png"
          className={styles.logo}
          alt=""
          width={200}
          height={100} />
        <div className={styles.navbar}>
          <div className={styles.item}>
            <Link href="/">
              <i className="bi bi-house-fill"></i>Inicio
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/about">
              <i className="bi bi-people-fill"></i>¿Quiénes somos?
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/products">
              <i className="bi bi-box-seam"></i>Productos
            </Link>
          </div>
          <div className={styles.item}>
            <Link href="/contact">
              <i className="bi bi-envelope-paper-fill"></i>Contactos
            </Link>
          </div>
        </div>
        <Burger />
      </div>
    </nav>
  )
}