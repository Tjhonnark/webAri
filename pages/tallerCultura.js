import { useState, useEffect } from 'react'
import Image from 'next/image';
/* COMPONENTS */
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
import Burger from '../components/Burger';
/* DATA */
/* STYLES */
import styles from '../styles/TallerCultura.module.css'

export default function TallerCultura({ scrollUpFunction, styleScrollUp, styleBurger }) {

    return (
        <div className={styles.body}>
            <Navbar />
            <section className={styles.sectionMain}>

                <div className={styles.photo}>
                    <Image
                        className={styles.imageS1}
                        src="/logo.jpg"
                        alt=""
                        width={500}
                        height={350}
                    /* objectFit="cover" */
                    />
                </div>
                <div className={styles.text}>
                    <h1>
                        Taller Cultura
                    </h1>
                    <p>
                        Taller Cultura es una asociación fundada en 2013 para la promoción de la cultura, las ciencias sociales y humanísticas, con un interés especial en entrelazar las áreas de literatura, medioambiente y sociedad.
                    </p>
                    <button>Read more</button>
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
                page="/"
                section1="Section 1"
                section2="Section 2"
                section3="Section 3"
                section4="Section 4"
            />
        </div>
    )
}

