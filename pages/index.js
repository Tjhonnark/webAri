import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import UseWindowSize from "../components/UseWindowSize";
/* STYLES */
import styles from "../styles/Home.module.css";

function Home({ scrollUpFunction, styleScrollUp, styleBurger }) {
  const size = UseWindowSize();
  /* console.log(size.width) */

  return (
    <div className={styles.body}>
      <Navbar />
      <section id="section1" className={styles.section1}>
        <Image
          className={styles.imageS1}
          src="/typeWriter2.png"
          alt=""
          width={1400}
          height={550}
        />
        <div className={styles.text1_a1_s1}>
          <div className={styles.container}>
            <p className={styles.p1}>
              A la esperanza, aniquiladora de todo pesimismo
            </p>
            <p className={styles.p2}>
              &quot;Panamá es verde&quot; y verde debe ser su futuro
            </p>
            <div className={styles.buttons}>
              <div className={styles.button1}>
                <Link href="#section2">Abrazos de una nariz sin olfato</Link>
              </div>
              <div className={styles.button2}>
                <Link href="#libro2">Geopsiquis de una nación</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section1" className={styles.sectionMini1}>
        <Image
          className={styles.imgSM1}
          src="/closeup-metal-parts-old-typewriters.jpg"
          alt=""
          width={450}
          height={550}
        />
        <div className={styles.maquinaDeEscribir}>
          <p>
            &quot;A la esperanza, <br />
            aniquiladora de todo <br />
            pesimismo&quot;
          </p>
        </div>
      </section>
      <section id="section2" className={styles.section2}>
        <div className={styles.libro1}>
          <div className={styles.texto}>
            <h2>Abrazos de una nariz sin olfato</h2>
            <p>
              &quot;Título sugestivo y kinestésico, encerrado en paréntesis.
              Territorio de asombro que desvela lo inusual. Poeta de fino
              palpar, y me refiero a esa epidermis del lenguaje suave, melodioso
              a veces, sin embargo, el poema no se da de manera fácil, ningún
              auténtico poema lo es. Aguza los sentidos para tomar el escarpelo
              e insertarlo en la interioridad del poema. Usa versos de arte
              menor y poemas breves. No hay desmesura, más bien, concentración.
              Esto me agrada ante el palabrerío insustancial de muchos
              poetas.&quot;
            </p>
            <p id="libro2" className={styles.autor}>
              Víctor Bidó
              <br />
              Ensayista, poeta y pintor (Rep. Dominicana)
            </p>
          </div>
          <div className={styles.portada}>
            <Image
              src="/abrazosparaunanarizsinolfato.jpg"
              alt="Abrazos para una nariz sin  olfato BBP Bethancourt"
              width={270}
              height={350}
              priority
            />
          </div>
        </div>
        <div className={styles.libro2}>
          <div className={styles.portada2}>
            <Image
              src="/portada_tapa_geopsiquis_final_feb2024.jpg"
              alt="Abrazos para una nariz sin  olfato BBP Bethancourt"
              width={270}
              height={350}
              priority
            />
          </div>
          <div className={styles.texto2}>
            <h2>Geopsiquis de una nación</h2>
            <p>
              De la pluma de Ariadna García Rodríguez hacemos una travesía por
              la Mar del Sur y sus implicaciones pasadas y presentes, hasta este
              siglo XXI, en donde el imaginario colectivo, con sus leyendas
              urbanas, trastoca la cotidianidad de lo panameño, extendiéndose al
              resto de la región centroamericana. Balboa, el Canal
              Interoceánico, Panamá y la poesía conforman un corpus heterogéneo
              de reflexiones científicas, histórico-geográficas, políticas y
              literarias, que se hilan a la perfección en este ensayo, auténtica
              joya literaria y pieza importante para comprender la historia de
              todo el Istmo.
            </p>
            <p className={styles.autor2}>
              Marta Leonor González
              <br />
              Periodista, editora y escritora (Nicaragua)
            </p>
          </div>
        </div>
      </section>
      <section id="section3" className={styles.section3}>
        <Image
          className={styles.imageS3}
          src="/DSC_0115.JPG"
          alt=""
          width={1400}
          height={550}
        />
        <div className={styles.text1_a1_s3}>
          <p>Festival Internacional de Poesía de Penonomé en Abril, 2014</p>
        </div>
      </section>
      <section id="section3" className={styles.sectionMini3}>
        <Image
          className={styles.imageS3}
          src="/DSC_0115.JPG"
          alt=""
          width={450}
          height={550}
        />
        <div className={styles.text1_a1_s3}>
          <p>Festival Internacional de Poesía de Penonomé en Abril, 2014</p>
        </div>
      </section>
      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Burger styleBurger={styleBurger} />
      <Footer
        page="/"
        section1="Section 1"
        section2="Section 2"
        section3="Section 3"
      />
    </div>
  );
}
export default Home;
