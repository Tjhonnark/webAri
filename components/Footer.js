import Link from 'next/link'
/* COMPONENTS */
import Info from './Info';
/* DATA */
import { initialProducts } from './data/dataProducts';
/* STYLES */
import styles from '../styles/Footer.module.css';

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.linkPages}>
                    <h4>Pagínas</h4>
                    <div className={styles.itemPages}>
                        
                            <a href="/" aria-current="page"><i className="bi bi-house-fill"></i>Inicio</a>
                        
                    </div>
                    <div className={styles.itemPages}>
                        
                            <a href="/about" aria-current="page"><i className="bi bi-people-fill"></i>¿Quiénes somos?</a>
                        
                    </div>
                    <div className={styles.itemPages}>
                        
                            <a href="/products" aria-current="page"><i className="bi bi-box-seam"></i>Productos</a>
                        
                    </div>
                    <div className={styles.itemPages}>
                        
                            <a href="/contact" aria-current="page"><i className="bi bi-envelope-paper-fill"></i>Contactos</a>
                       
                    </div>
                </div>
                <div className={styles.linkSection}>
                    <h4>Secciones</h4>
                    <div className={styles.itemSection}>
                        
                            <a href={props.page + "#section1"} aria-current="page">{props.section1}</a>
                        
                    </div>
                    <div className={styles.itemSection}>
                        
                            <a href={props.page + "#section2"} aria-current="page">{props.section2}</a>
                        
                    </div>
                    <div className={styles.itemSection}>
                        
                            <a href={props.page + "#section3"} aria-current="page">{props.section3}</a>
                        
                    </div>
                    <div className={styles.itemSection}>
                        
                            <a href={props.page + "#section4"} aria-current="page">{props.section4}</a>
                        
                    </div>
                </div>
                <div className={styles.linkProduct}>
                    <h4>Productos</h4>
                    <div className={styles.items}>
                        {
                            initialProducts.map((product) => {
                                return (
                                    <div key={product.id} 
                                    className={styles.itemProduct}>
                                        
                                            <a href={"/products#" + product.id} aria-current="page">{product.name}</a>
                                        
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={styles.info}>
                    <Info 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores assumenda tenetur cupiditate iure dolor voluptatibus consequuntur suscipit magni, ipsa illum doloribus autem ratione officiis beatae error quos, ab aliquam eum?"
                    />
                </div>
            </div>
            <div className={styles.webapp}>
                <a
                    href="https://www.tjhonnar.ga"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <h3 className={styles.webapp_title}>ThomasDev</h3>
                </a>
            </div>
        </footer>
    )
}