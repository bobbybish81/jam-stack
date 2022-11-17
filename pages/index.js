import Fruit from '../components/Fruit'
import Items from '../components/Items'
import styles from '../styles/Home.module.css'

const contentful = require( 'contentful')

const client = contentful.createClient({
  space: 'baai5u558zt5',
  environment: 'master',
  accessToken: "JUiO9lyPdlN0BMUgPtJmpRMTbrm6yvRH8JlCeBfzoj4"
})

export async function getStaticProps () {
  const products = await client.getEntries()
  const items = products?.items.map(obj => obj)
    .map(obj => obj.fields)
  const images = products?.includes.Asset.map(obj => obj.fields)
    .map(obj => obj.file)
      .map(obj => obj.url)

  return {
    props: {
      items: items,
      images: images
    }
  }
}

export default function Home({ items, images }) {
  return (
    <>
      <header>
        <h1 className={styles.main_heading} >CIKC Reloadeds Online Fruit Store</h1>
      </header>
      <Items items={items} images={images}/>
    </>
  )
}
