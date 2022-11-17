import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Fruit({product, images}) {

  const router = useRouter()

  const redirectHome = () => {
     router.push('/')
  }

  return (
    <>
    <header>
        <h1 className={styles.main_heading} >CIKC Reloadeds Online Fruit Store</h1>
    </header>
    <section className={styles.fruit_container}>
      {product?.map((fruit, index) => {
      const regex = new RegExp(fruit.fields.image.sys.id)
      const imageIndex = images.findIndex(url => url.match(regex))
      return (
        <article key={index}>
          <h2 className={styles.fruitname}>{fruit.fields.name}</h2>
          <img className={styles.fruit_image} src={images[imageIndex]} alt={"image:" + fruit.id}/>
          <div>
            <p><b>Description: </b>{fruit.fields.description}</p>
            <h3>Price: {fruit.fields.price} kr</h3>
            {fruit.fields.inStock ?
              <div className={styles.purchase_container}>
                <label>Select Quantity</label>
                <select className={styles.quantity}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <button className={styles.purchase_btn}>Make Purchase</button>
              </div>
              : <h3 className={styles.oos_text}>Out of Stock</h3>}
          </div>
          <p className={styles.home_link} onClick={redirectHome}>Return to Homepage</p>
        </article>
        )
      })}
    </section>
    </>
  )
}
