import React, { useState } from "react";
/* STYLES */
import styles from "../../styles/Modals/Comentarios.module.css";

export default function Comentarios({
  modalForm,
  setModalForm,
  comentario,
  people,
  more,
}) {
  const modal = () => {
    setModalForm(modalForm);
  };

  const modalClose = () => {
    setModalForm(!modalForm);
    /* var sound = new Audio('sounds/close.wav')
        sound.play()
        sound.volume = 0.2; */
  };

  return (
    <>
      <div
        className={modalForm ? styles.productForm : styles.productForm2}
      >
        <div className={styles.container}>
          <div className={styles.title_container}>
            <h2>"</h2>
            <button onClick={modalClose}>
              <i className="bi bi-x-circle-fill"></i>
            </button>
          </div>
          <div className={styles.products}>
            <p>{comentario}</p>
            <div className={styles.more}>
              <h4>{people}</h4>
              <p>{more}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
