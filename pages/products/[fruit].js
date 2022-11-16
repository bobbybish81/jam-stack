import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

function Fruit() {

  const router = useRouter()
  const id = router.query.fruit;

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

  const product = products?.items.filter(fruit => fruit.fields.id == id);

  const images = products?.includes.Asset.map(obj => obj.fields)
    .map(obj => obj.file)
      .map(obj => obj.url)

  if (product?.length === 0) {
    return (
      <h1>Not as valid product</h1>
    )
  }

  console.log('product: ', product)
  return (
    <section className={styles.fruit_container}>
    {product?.map((fruit, index) => {
      const regex = new RegExp(fruit.fields.image.sys.id)
      const imageIndex = images.findIndex(url => url.match(regex))
      return (
      <article key={index}>
        <img className={styles.fruit_image} src={images[imageIndex]} alt={"image:" + fruit.id}></img>
        <div>
          <p><b>Fruit: </b>{fruit.fields.name}</p>
          <p><b>Description: </b>{fruit.fields.description}</p>
          <p><b>Price: </b>{fruit.fields.price} kr</p>
        </div>
      </article>
      )
    })}
    </section>
  )
}

export default Fruit