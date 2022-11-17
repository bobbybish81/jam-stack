import React from 'react'
import styles from '../styles/Home.module.css'

export default function Fruit({product, images}) {

  return (
    <>
    <header>
        <h1 className={styles.main_heading} >CIKC Reloaded's Online Fruit Store</h1>
    </header>
    <section className={styles.fruit_container}>
      {product?.map((fruit, index) => {
      const regex = new RegExp(fruit.fields.image.sys.id)
      const imageIndex = images.findIndex(url => url.match(regex))
      return (
        <article key={index}>
          <h3 className={styles.fruitname}>{fruit.fields.name}</h3>
          <img className={styles.fruit_image} src={images[imageIndex]} alt={"image:" + fruit.id}></img>
          <div>
            <p><b>Description: </b>{fruit.fields.description}</p>
            <p><b>Price: </b>{fruit.fields.price} kr</p>
          </div>
        </article>
        )
      })}
    </section>
    </>
  )
}
