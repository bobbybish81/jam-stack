import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

  const items = products?.items;

  const images = products?.includes.Asset.map(obj => obj.fields)
    .map(obj => obj.file)
      .map(obj => obj.url)

  return (
    items?.map((fruit, index) => {
      return (
      <article key={index}>
        <Link href={"products/" + fruit.fields.id}>
          <p>{fruit.fields.name}</p>

          <img src={images[index]} alt={"image:" + fruit.fields.id}></img>
        </Link>
      </article>
      )
    })

  )
}

export default Products