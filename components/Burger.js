import { useState } from "react";
import Link from "next/link";
// STYLES
import styles from "../styles/Burger.module.css";

export default function Burger({ menuOpen, setMenuOpen }) {
  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false); // Cerrar el menú al hacer clic en un elemento del menú
  };

  return (
    <nav className={styles.nav}>
      <button className={styles.burgerButton} onClick={handleToggleMenu}>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </button>
      <div className={styles.logo}></div>
      <ul className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/">
            <i className="bi bi-house-fill"></i>
            Inicio
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/quien">
            <i className="bi bi-people-fill"></i>¿Quién?
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/haceres">
            <i class="bi bi-pencil-fill"></i>
            Haceres
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/andares">
            <i class="bi bi-images"></i>
            Andares
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/tallerCultura">
            <i className="bi bi-envelope-paper-fill"></i>
            Taller Cultura
          </Link>
        </li>
        <li className={styles.menuItem} onClick={handleMenuItemClick}>
          <Link href="/contacto">
            <i className="bi bi-envelope-paper-fill"></i>
            Contacto
          </Link>
        </li>
        {/* Resto de tus items del menú */}
      </ul>
    </nav>
  );
}
