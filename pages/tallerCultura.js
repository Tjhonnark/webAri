import { useState, useEffect } from "react";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import Carrusel2 from "../components/Carrusel2";
/* DATA */
/* STYLES */
import styles from "../styles/TallerCultura.module.css";

export default function TallerCultura({
  scrollUpFunction,
  styleScrollUp,
  styleBurger,
}) {
  return (
    <div className={styles.body}>
      <Navbar />
      <section id="section1" className={styles.sectionMain}>
        <div className={styles.photo}>
          <Image
            className={styles.imageS1}
            src="/tallerCResuelto.png"
            alt=""
            width={500}
            height={350}
            /* objectFit="cover" */
          />
        </div>
        <div className={styles.text}>
          <h1>TALLER CULTURA</h1>
          <p>
            <strong><i>Taller Cultura es una asociación fundada en 2013</i></strong> para la promoción
            de la cultura, las ciencias sociales y humanísticas, con un interés
            especial en entrelazar las áreas de literatura, medioambiente y
            sociedad. Buscamos generar iniciativas que contribuyan de manera
            solidaria a la equidad de oportunidades para el desarrollo humano, a
            una relación armónica con nuestro hábitat natural y a fortalecer el
            acceso a la cultura, a través de las Artes, la Comunicación, los
            Derechos Humanos y la Ecología. El grupo está formado por
            profesionales en el derecho, la docencia, las humanidades y la
            escritura, junto con voluntariado de colaboradores con otras
            experticias.
            <br />
            <br />
            Entre nuestras principales actividades se cuenta la promoción de la
            lectura y la literatura. Queremos que la literatura sea hermana del
            quehacer diario, ya como lectores o como escritores, y para tal
            propósito <strong><i>desde 2014 venimos realizando charlas, conversatorios y
            recitales</i></strong> que incentiven al público, en especial a los jóvenes, a
            acercarse a autores panameños e internacionales.
          </p>
        </div>
      </section>
      <section id="section2" className={styles.section2}>
        <div className={styles.text2}>
          <p>
            Como creadores de contenido <strong><i>a partir de 2019 establecimos la
            división Taller Cultura Publicaciones</i></strong>, ofreciendo servicios y sello
            editorial no lucrativo para el acompañamiento de escritores.
            Igualmente, ofrecemos asesorías privadas, lingüístico-literarias,
            sobre género y cultura, entre otros, en un nutrido intercambio de
            ideas, respetuoso de la diferencia pero también del idioma, y con
            información documentada.
            <br />
            <br />
            En la línea de nuestro interés por la juventud, <strong><i>en 2022 debutó El
            Programa NEA</i></strong>, que en griego significa nuevo y joven. Este es un
            programa de capacitación y mentoría en emprendimiento y vida
            ciudadana, con enfoque intergeneracional, que apoya a jóvenes ávidos
            de arrancar en una sociedad difícil como la nuestra. Nos interesa
            trabajar con este grupo para dotarlos de herramientas prácticas para
            la vida y de valores humanísticos fundamentales para las nuevas
            generaciones.
            <br />
            <br />
            Nuestra próxima aventura: ¡nuestra página web, pronto....! De
            momento, nos pueden contactar a través de nuestras redes sociales y
            correo: @fundaciontallercultura |
            fundaciontallercultura@gmail.com
          </p>
        </div>
        <div className={styles.carrusel2}>
          <Carrusel2 />
        </div>
      </section>
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Burger styleBurger={styleBurger} />
      <Footer page="/tallerCultura" section1="Section 1" />
    </div>
  );
}
