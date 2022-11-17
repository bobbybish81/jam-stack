import React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Items({items, images}) {
  return (
    <section className={styles.fruit_container}>
    {items?.map((fruit, index) => {
      const regex = new RegExp(fruit.image.sys.id)
      const imageIndex = images.findIndex(url => url.match(regex))
      return (
      <article key={index}>
        <Link href={"" + fruit.id}>
          <h2 className={styles.fruitname}>{fruit.name}</h2>
          <img className={styles.fruit_image} src={images[imageIndex]} alt={"image:" + fruit.id}/>
        </Link>
      </article>
      )
    })}
    </section>
  )
}
