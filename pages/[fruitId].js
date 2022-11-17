import Fruit from '../components/Fruit'

const contentful = require( 'contentful')

const client = contentful.createClient({
  space: 'baai5u558zt5',
  environment: 'master',
  accessToken: "JUiO9lyPdlN0BMUgPtJmpRMTbrm6yvRH8JlCeBfzoj4"
})

export async function getStaticPaths () {
  
  const products = await client.getEntries()
  const paths = products.items.map(fruit => ({params: { fruitId: `${fruit.fields.id}`}}));

  return {
    fallback: false,
    paths: paths
  }
}

export async function getStaticProps (context) {
  const fruitId = context.params.fruitId;
  const products = await client.getEntries()
  const product = products?.items.filter(fruit => fruit.fields.id == fruitId);
  const images = products?.includes.Asset.map(obj => obj.fields)
  .map(obj => obj.file)
    .map(obj => obj.url)

  return {
    props: {
      product: product,
      images: images,
    }
  }
}

export default function Fruits ({ product, images }) {

  if (product?.length === 0) {
    return (
      <h1>Not as valid product</h1>
    )
  }

return (
   <Fruit product={product} images={images}/>
  )
}

