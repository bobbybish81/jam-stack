import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

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

  if (product?.length === 0) {
    return (
      <h1>Not as valid product</h1>
    )
  }
  return (
    product?.map((fruit, index) => {
     return (
      <article key={index}>
        <h1>{fruit.fields.name}</h1>
        <h1>{fruit.fields.description}</h1>
        <h1>{fruit.fields.price}</h1>
      </article>
     ) 
    })
  )
}

export default Fruit