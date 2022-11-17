const contentful = require('contentful')

const client = contentful.createClient({
  space: 'baai5u558zt5',
  environment: 'master',
  accessToken: 'JUiO9lyPdlN0BMUgPtJmpRMTbrm6yvRH8JlCeBfzoj4'
})


export default function handler(req, res) {
  client.getEntries()
    .then(res => res.json())
    .catch(console.error)
}
