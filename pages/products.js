import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

function Products() {

  const [products, setProducts] = useState();

  const url = 'https://cdn.contentful.com/spaces/baai5u558zt5/environments/master/entries?access_token=JUiO9lyPdlN0BMUgPtJmpRMTbrm6yvRH8JlCeBfzoj4';

  const fetchProducts = async () => {
    const results = await fetch(url)
      .then(res => res.json())
        .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  const items = products?.items.map(obj => obj)
    .map(obj => obj.fields)
  
  const images = products?.includes.Asset.map(obj => obj.fields)
    .map(obj => obj.file)
      .map(obj => obj.url)

  return (
    <section className={styles.fruit_container}>
    {items?.map((fruit, index) => {
      const regex = new RegExp(fruit.image.sys.id)
      const imageIndex = images.findIndex(url => url.match(regex))
      return (
      <article key={index}>
        <Link href={"products/" + fruit.id}>
          <h3 className={styles.fruitname}>{fruit.name}</h3>
          <img className={styles.fruit_image} src={images[imageIndex]} alt={"image:" + fruit.id}></img>
        </Link>
      </article>
      )
    })}
    </section>

  )
}

export default Products