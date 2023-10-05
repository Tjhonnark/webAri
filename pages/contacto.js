import Link from 'next/link.js';
import Image from 'next/image'
import { useState } from 'react';
/* COMPONENTS */
import Forms from '../components/Forms.js';
import MapView from '../components/MapView.js'
import FormSend from '../components/modals/FormSend.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js'
import Info from '../components/Info.js';
import ScrollUp from '../components/ScrollUp.js'
import Burger from '../components/Burger.js';
/* STYLES */
import styles from '../styles/Contacto.module.css'

const Contacto = ({ scrollUpFunction, styleScrollUp, styleBurger }) => {

    const [modalFormSend, setModalFormSend] = useState(false);

    return (
        <div className={styles.body}>
            <Navbar />
            <section id='section1' className={styles.section1}>
                <Image
                    className={styles.imageS1}
                    src="/ContactUs2.png"
                    alt=""
                    width={600}
                    height={500}
                    objectFit="contain"
                />
                <div className={styles.text_s1}>
                    <h1>Blog personal</h1>
                    <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quasi perferendis maiores nesciunt ea sint nam dicta commodi veritatis ullam illum cum quod quo voluptas, minus perspiciatis aspernatur laborum inventore!
                    </p>
                    <Link href="https://7hosoft.vercel.app" className={styles.buttontest} >
                        <div className={styles.buttonS1}>
                            <div className={styles.svgWrapper1}>
                                <div className={styles.svgWrapper}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Blog</span>
                        </div>
                    </Link>
                </div>
            </section>
            <ScrollUp
                scrollUpFunction={scrollUpFunction}
                styleScrollUp={styleScrollUp}
            />
            <Burger 
                styleBurger={styleBurger}
            />
            <Footer
                page="/contacto"
                section1="Section 1"
            />
        </div>
    )
}
export default Contacto;