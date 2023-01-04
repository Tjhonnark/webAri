import Image from 'next/image'
import styles from '../styles/ProductFormView.module.css'

export default function ProductFormView({ product, productToggleSelect }) {
    return (
        <>
            {product.select ?
                <div className={styles.product}>
                    <figure name="productImage" className={styles.figure}>
                        <Image
                        src={product.image} 
                        alt=""
                        width={600}
                        height={400}
                        /* objectFit="cover" */ />
                    </figure>
                    <div type='text' name="productName" className={styles.name}>
                        {product.name}
                    </div>
                    <button
                        className={styles.button}
                        onClick={() => productToggleSelect(product.id)}
                    >
                        <i className="bi bi-x-circle-fill"></i>
                    </button>
                </div>
                : ""}
        </>
    )
}