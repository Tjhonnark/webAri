import Link from 'next/link';
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
        <img src="/logo.png" className={styles.logo} alt="" width="10%" />
        <div className={styles.navbar}>
          <div className={styles.item}>
              <a href="/" aria-current="page" ><i className="bi bi-house-fill"></i>Inicio</a>
            
          </div>
          <div className={styles.item}>
            
              <a href="/about" aria-current="page" ><i className="bi bi-people-fill"></i>¿Quiénes somos?</a>
            
          </div>
          <div className={styles.item}>
           
              <a href="/products" aria-current="page" ><i className="bi bi-box-seam"></i>Productos</a>
            
          </div>
          <div className={styles.item}>
           
              <a href="/contact" aria-current="page" ><i className="bi bi-envelope-paper-fill"></i>Contactos</a>
            
          </div>
        </div>
      </div>
    </nav>
  )
}