const contentful = require('contentful')

const client = contentful.createClient({
  space: 'baai5u558zt5',
  environment: 'master',
  accessToken: process.env.PRODUCTS_PUBLISH_API_KEY
})


export default function handler(req, res) {
  client.getEntries()
    .then(res => res.json())
    .catch(console.error)
}