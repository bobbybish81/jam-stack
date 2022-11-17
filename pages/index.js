import Fruit from '../components/Fruit'
import Items from '../components/Items'
import styles from '../styles/Home.module.css'

const contentful = require( 'contentful')

const client = contentful.createClient({
  space: 'baai5u558zt5',
  environment: 'master',
  accessToken: process.env.PRODUCTS_PUBLISH_API_KEY
})

export async function getStaticProps () {
  const products = await client.getEntries()
  return {
    props: {
      products
    }
  }
}

export default function Home({ products }) {

  const items = products?.items.map(obj => obj)
    .map(obj => obj.fields)
  
  const images = products?.includes.Asset.map(obj => obj.fields)
    .map(obj => obj.file)
      .map(obj => obj.url)

  return (
    <>
      <header>
        <h1 className={styles.main_heading} >CIKC Reloaded's Online Fruit Store</h1>
      </header>
      <Items items={items} images={images}/>
    </>
  )
}
