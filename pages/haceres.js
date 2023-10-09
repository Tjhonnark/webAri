import Link from 'next/link'
import Image from 'next/image';
/* COMPONENTS */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
import Burger from '../components/Burger';
import Carrusel from '../components/Carrusel';
/* STYLES */
import styles from '../styles/Haceres.module.css'

export default function Haceres({ scrollUpFunction, styleScrollUp, styleBurger }) {

    /* console.log(Image) */

    return (
        <div className={styles.body}>
            <Navbar />
            <section id='section1' className={styles.section1}>
                <Image
                    className={styles.imageS1}
                    src="/books.jpg"
                    alt=""
                    width={1400}
                    height={550}
                />
                <div className={styles.text1_a1_s1}>
                    <h2>En construcción</h2>
                </div>
            </section>
            {/*<section className={styles.publicaciones}>
                <h2>
                    Publicaciones
                </h2>
                <div className={styles.container}>
                    <div
                        className={styles.cardLeft}>
                        <div className={styles.comillas}>
                            <Image
                                src="/white_quotation_marks_on_blue_background.jpg"
                                alt=""
                                width={30}
                                height={30}
                             objectFit="cover" 
                            />
                        </div>
                        <div className={styles.texto}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in nihil non, voluptatibus officiis cumque adipisci expedita a eligendi eum suscipit autem perferendis ad laudantium aut nulla quis recusandae soluta.</p>
                        </div>
                        <h4>
                            Eyra Harbar <br />Abogada
                        </h4>
                    </div>
                    <div
                        className={styles.cardLeft}>
                        <p>"</p>
                        <h4>
                            Eyra Harbar <br />Abogada
                        </h4>
                    </div>
                    <div className={styles.libro1}>
                        <Image
                            className={styles.libro1img}
                            src="/example.jpg"
                            alt="Ariadna Garcia"
                            width={220}
                            height={260}
                            priority
                        />
                        <h3>2012 - Abrazos de una nariz sin olfato</h3>
                    </div>
                    <div
                        className={styles.cardRight}>
                        <p>"</p>
                        <h4>
                            Eyra Harbar <br />Abogada
                        </h4>
                    </div>
                    <div
                        className={styles.cardRight}>
                        <p>"</p>
                        <h4>
                            Eyra Harbar <br />Abogada
                        </h4>
                    </div>
                </div>
            </section>
            <section className={styles.trayectoria}>
                <h2>
                    Trayectoria
                </h2>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque.</p>
                        <button className={styles.button}>
                            Link
                        </button>
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
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque.</p>
                            <button className={styles.button}>
                                Link
                            </button>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque.</p>
                        <button className={styles.button}>
                            Link
                        </button>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque.</p>
                        <button className={styles.button}>
                            Link
                        </button>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque.</p>
                        <button className={styles.button}>
                            Link
                        </button>
                    </div>
                </div>
                <div className={styles.row3}>
                    <div className={styles.evento1}>
                        <Carrusel />
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolore in non veritatis dolores autem pariatur, cupiditate odio sapiente deleniti maxime placeat cum nobis corporis facere ipsa voluptas iste eaque.</p>
                        <button className={styles.button}>
                            Link
                        </button>
                    </div>
                </div>
            </section>
            */}
            <ScrollUp
                scrollUpFunction={scrollUpFunction}
                styleScrollUp={styleScrollUp}
            />
            <Burger
                styleBurger={styleBurger}
            />
            <Footer
                page="/haceres"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
            />
        </div>
    )
} 