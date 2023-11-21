import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
/* COMPONENTS */
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollUp from "../components/ScrollUp";
import Burger from "../components/Burger";
import Comentarios from "../components/modals/Comentarios";
import Carrusel from "../components/Carrusel";
/* STYLES */
import styles from "../styles/Haceres.module.css";

export default function Haceres({
  scrollUpFunction,
  styleScrollUp,
  styleBurger,
}) {
  const [comentario, setComentario] = useState(false);
  const [comentario2, setComentario2] = useState(false);
  const [comentario3, setComentario3] = useState(false);
  const [comentario4, setComentario4] = useState(false);
  const [comentario21, setComentario21] = useState(false);
  const [comentario31, setComentario31] = useState(false);
  const [comentario32, setComentario32] = useState(false);

  // Cart
  const cart = () => {
    setComentario(!comentario);
    /*var sound = new Audio("sounds/cart.wav");
    sound.play();
    sound.volume = 0.2;*/
  };

  const cart2 = () => {
    setComentario2(!comentario2);
  };
  const cart3 = () => {
    setComentario3(!comentario3);
  };
  const cart4 = () => {
    setComentario4(!comentario4);
  };
  const cart21 = () => {
    setComentario21(!comentario21);
  };
  const cart31 = () => {
    setComentario31(!comentario31);
  };
  const cart32 = () => {
    setComentario32(!comentario32);
  };

  return (
    <div className={styles.body}>
      <Navbar />
      <section id="section1" className={styles.section1}>
        <Image
          className={styles.imageS1}
          src="/books.jpg"
          alt=""
          width={1400}
          height={550}
        />
        <div className={styles.text1_a1_s1}>
          <h2>Haceres</h2>
        </div>
      </section>
      <section className={styles.publicaciones}>
        <h2>Publicaciones</h2>
        <div className={styles.container}>
          <div className={styles.libro1}>
            <Image
              className={styles.libro1img}
              src="/abrazosparaunanarizsinolfato.jpg"
              alt="Ariadna Garcia"
              width={300}
              height={370}
              priority
            />
            <h3>2012 - Abrazos de una nariz sin olfato</h3>
          </div>
          <div className={styles.comentarios}>
            <Comentarios
              modalForm={comentario}
              setModalForm={setComentario}
              comentario="“Hay un gusto barroco por la cifra y lo cifrado, en una especie de anti títulos donde se matiza la presencia o ausencia del número de manera aleatoria, casi como función u obsesión pitagórica. En el primer poema sin cifra, de apenas 4 versos, reside la clave del libro, el juego tierno y feroz entre el instante y una eternidad que quizás no exista, de una vida amenazada por el vacío. No esperen al leerlo salir con todas las respuestas, porque nos obliga a reflexionar en una invitación al abrazo más intenso a pesar de que lo que exista al final sea la desilusión total. Este es un libro que nos hace plantearnos dudas y enigmas.”"
              people="Leonel Alvarado"
              more="Poeta y académico (Honduras/Nueva Zelanda)."
            />
            <button className={styles.comentario} onClick={cart}>
              Leonel Alvarado
            </button>
            <Comentarios
              modalForm={comentario2}
              setModalForm={setComentario2}
              comentario="“Título sugestivo y kinestésico, encerrado en paréntesis. Territorio de asombro que desvela lo inusual. Poeta de fino palpar, y me refiero a esa epidermis del lenguaje suave, melodioso a veces, sin embargo, el poema no se da de manera fácil, ningún auténtico poema lo es. Aguza los sentidos para tomar el escarpelo e insertarlo en la interioridad del poema. Usa versos de arte menor y poemas breves. No hay desmesura, más bien, concentración. Esto me agrada ante el palabrerío insustancial de muchos poetas.”"
              people="Víctor Bidó Ensayista"
              more="Poeta y pintor (Rep. Dominicana)."
            />
            <button className={styles.comentario2} onClick={cart2}>
              Víctor Bidó Ensayista
            </button>
            <Comentarios
              modalForm={comentario3}
              setModalForm={setComentario3}
              comentario="“Trabajo de largo aliento, obra pulida, esculpe con ironía y humor pasajes infinitamente humanos, en lo que entendemos es un poemario para tallar el retorno. La dedicatoria “A la esperanza, aniquiladora de todo pesimismo” sella esa persistencia inquebrantable, gesto a partir del cual se inicia el repertorio de movimientos de la palabra como materia prima. De versos cincelados, sus herramientas de trabajo son abrazos: 16 secciones de abrazos con cifras aleatorias, 4 sin cifra y una sección de abrazos excedentes. El libro es también un viaje des-localizado de tierra alguna, viaje hacia una morada sin paradero fijo, cuyas diferentes citas e idiomas revelan una trayectoria de abrazos itinerantes, casi desarraigados. No obstante, a través de ellos la morada interior prevalece como casa-territorio, como escenario de lo propio; allí, la memoria deja su huella, su talla imborrable porque el itinerario vuelve siempre a la intimidad del abrazo.”"
              people="Eyra Harbar"
              more="Poeta y abogada (Panamá)."
            />
            <button className={styles.comentario3} onClick={cart3}>
              Eyra Harbar
            </button>
            <Comentarios
              modalForm={comentario4}
              setModalForm={setComentario4}
              comentario="“La voz de Abrazos de una nariz sin olfato persigue imágenes, las elige cuidadosamente y las ofrece, luego de una reflexión poética, depuradas, casi como instantáneas pictóricas (…) Y muchas de estas imágenes son descarnadas, cosa que no deja indiferente al lector.”"
              people="Sonia Fernández Hoyos"
              more="Académica y crítica literaria (Francia)."
            />
            <button className={styles.comentario4} onClick={cart4}>
              Sonia Fernández Hoyos
            </button>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.comentarios}>
            <Comentarios
              modalForm={comentario21}
              setModalForm={setComentario21}
              comentario="“Trabajo experimental de poesía sonora que busca dejar atrás la simple musicalización de poemas en pos de un verdadero dialogo creativo entre dos disciplinas artísticas: la composición musical y la composición poética, tal como lo dice Bethancourt en el epígrafe de la caratula: porque la conversación y sus alteraciones son un atributo más de lo poético y lo musical. Realizado en conjunto con la Maestra Electra Castillo, compositora e instrumentista, el mismo consta de piezas cortas, para oboe, cuerdas y piano, concebidas a manera de ensayo sinfónico en respuesta al poemario, mientras la voz de la poeta da vida a los poemas. Se llevó a cabo una presentación del libro y un concierto preliminar en la antigua Exedra Books, en 2012.”"
              people="Eyra Harbar"
              more="Escritora y abogada (Panamá)."
            />
            <button className={styles.comentario} onClick={cart21}>
              Eyra Harbar
            </button>
          </div>
          <div className={styles.libro1}>
            <Image
              className={styles.libro1img}
              src="/foto2.jpg"
              alt="Ariadna Garcia"
              width={300}
              height={370}
              priority
            />
            <h3>
              Opus sostenido. Alegoría musical para Abrazos de una nariz sin
              olfato
            </h3>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.libro1}>
            <Image
              className={styles.libro1img}
              src="/agr-patrimonio-intangible.jpg"
              alt="Ariadna Garcia"
              width={300}
              height={370}
              priority
            />
            <h3>Patrimonio intangible (poesía, 2018)</h3>
          </div>
          <div className={styles.comentarios}>
            <Comentarios
              modalForm={comentario31}
              setModalForm={setComentario31}
              comentario="“La voz poética bethancourtiana cobra aquí otras formas y matices, experimentado con formatos más extensos y nuevas temáticas.”"
              people="Joan A. Martí"
              more="Filólogo (España)."
            />
            <button className={styles.comentario} onClick={cart31}>
              Joan A. Martí
            </button>
            <Comentarios
              modalForm={comentario32}
              setModalForm={setComentario32}
              comentario="“Título sugestivo y kinestésico, encerrado en paréntesis. Territorio de asombro que desvela lo inusual. Poeta de fino palpar, y me refiero a esa epidermis del lenguaje suave, melodioso a veces, sin embargo, el poema no se da de manera fácil, ningún auténtico poema lo es. Aguza los sentidos para tomar el escarpelo e insertarlo en la interioridad del poema. Usa versos de arte menor y poemas breves. No hay desmesura, más bien, concentración. Esto me agrada ante el palabrerío insustancial de muchos poetas.”"
              people="Víctor Bidó Ensayista"
              more="Poeta y pintor (Rep. Dominicana)."
            />
            <button className={styles.comentario2} onClick={cart32}>
              Víctor Bidó Ensayista
            </button>
          </div>
        </div>
      </section>
      <section className={styles.trayectoria}>
        <h2>Trayectoria</h2>
        <div className={styles.row1}>
          <div className={styles.evento1}>
            <Image
              className={styles.imgEvento1}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <p>00/00/0000</p>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore in non veritatis dolores autem pariatur, cupiditate odio
              sapiente deleniti maxime placeat cum nobis corporis facere ipsa
              voluptas iste eaque.
            </p>
            <button className={styles.button}>Link</button>
          </div>
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento2}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={400}
              priority
            />
            <div className={styles.textEvento2}>
              <p>00/00/0000</p>
              <h3>Title</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                dolore in non veritatis dolores autem pariatur, cupiditate odio
                sapiente deleniti maxime placeat cum nobis corporis facere ipsa
                voluptas iste eaque.
              </p>
              <button className={styles.button}>Link</button>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.evento1}>
            <Image
              className={styles.imgEvento1}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <p>00/00/0000</p>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore in non veritatis dolores autem pariatur, cupiditate odio
              sapiente deleniti maxime placeat cum nobis corporis facere ipsa
              voluptas iste eaque.
            </p>
            <button className={styles.button}>Link</button>
          </div>
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento1}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <p>00/00/0000</p>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore in non veritatis dolores autem pariatur, cupiditate odio
              sapiente deleniti maxime placeat cum nobis corporis facere ipsa
              voluptas iste eaque.
            </p>
            <button className={styles.button}>Link</button>
          </div>
          <div className={styles.evento3}>
            <Image
              className={styles.imgEvento1}
              src="/example.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <p>00/00/0000</p>
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              dolore in non veritatis dolores autem pariatur, cupiditate odio
              sapiente deleniti maxime placeat cum nobis corporis facere ipsa
              voluptas iste eaque.
            </p>
            <button className={styles.button}>Link</button>
          </div>
        </div>
        <div className={styles.row3}>
          <div className={styles.evento1}>
            <Carrusel />
            <p>
              <i>
                Porque la conversación y sus alteraciones son un atributo más de
                lo poético y lo musical.
                <br />
              </i>{" "}
              <strong>BBP Bethancourt, 2014</strong>
            </p>
          </div>
          <div className={styles.evento2}>
            <Image
              className={styles.imgEvento1}
              src="/Foto2b.jpg"
              alt="Ariadna Garcia"
              width={320}
              height={300}
              priority
            />
            <h3>Música y poesía</h3>
            <p>
              Ensayo de poesía sonora:{" "}
              <i>
                <strong>
                  Opus Sostenido. Alegoría musical para Abrazos de una nariz sin
                  olfato.
                </strong>
              </i>{" "}
              Tino Castro Estudio, 2014. <br />
              Dialogo entre música y poesía:
              <strong>
                <i> CantArte POrÉtica,</i>{" "}
              </strong>{" "}
              Sanbors, Multiplaza, Panamá 2014.
            </p>
            <Link
              href="https://www.youtube.com/watch?v=JNnpk9lMkNM"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              CantARTE POrETICA / Ronda 2-8
            </Link>
          </div>
        </div>
      </section>

      <ScrollUp
        scrollUpFunction={scrollUpFunction}
        styleScrollUp={styleScrollUp}
      />
      <Burger styleBurger={styleBurger} />
      <Footer
        page="/haceres"
        section1="Section 1"
        section2="Section 2"
        section3="Section 3"
      />
    </div>
  );
}
