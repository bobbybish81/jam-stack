const contentful = require('contentful')

const client = contentful.createClient({
  space: 'baai5u558zt5',
  environment: 'master',
  accessToken: "JUiO9lyPdlN0BMUgPtJmpRMTbrm6yvRH8JlCeBfzoj4"
})


export default function handler(req, res) {
  res.status(200).json([{"id":1,"name":"Bananas","description":"A curved, yellow fruit with a thick skin and soft sweet flesh. It is a tropical fruit that's quite popular all over the world and grows in bunches on a banana tree.","image":{"metadata":{"tags":[]},"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"baai5u558zt5"}},"id":"6qRhXLYqkQ0i2PI2eyHz8M","type":"Asset","createdAt":"2022-11-15T12:47:43.175Z","updatedAt":"2022-11-15T12:47:43.175Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"bananas","description":"","file":{"url":"//images.ctfassets.net/baai5u558zt5/6qRhXLYqkQ0i2PI2eyHz8M/db83c6517875d8c9c83e638f78b638f9/Screenshot_2022-11-15_at_13.47.14.png","details":{"size":625634,"image":{"width":834,"height":804}},"fileName":"Screenshot 2022-11-15 at 13.47.14.png","contentType":"image/png"}}},"price":50,"quantity":57,"inStock":true},{"id":4,"name":"Oranges","description":"The orange is a round citrus fruit. It's  skin and flesh are generally orange, except the varieties of red pulp. The edible part of the orange is the flesh, consumed fresh, in juice or in jams.","image":{"metadata":{"tags":[]},"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"baai5u558zt5"}},"id":"5emV4oAGkwWQH78sEnDO4G","type":"Asset","createdAt":"2022-11-15T12:46:16.653Z","updatedAt":"2022-11-15T12:46:16.653Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"oranges","description":"","file":{"url":"//images.ctfassets.net/baai5u558zt5/5emV4oAGkwWQH78sEnDO4G/7b3c1428bbb8842a3e50e331efcdb8e0/Screenshot_2022-11-15_at_13.44.12.png","details":{"size":452959,"image":{"width":645,"height":584}},"fileName":"Screenshot 2022-11-15 at 13.44.12.png","contentType":"image/png"}}},"price":40,"quantity":90,"inStock":true},{"id":2,"name":"Watermelon","description":"The watermelon has an oval or spherical shape and a dark green and smooth skin, sometimes showing irregular areas of a pale green colour. It has a sweet, juicy, refreshing flesh of yellowish or reddish colour, containing multiple black, brown or white pips.","image":{"metadata":{"tags":[]},"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"baai5u558zt5"}},"id":"1Dzn8vr5stnUbMBjac88Uf","type":"Asset","createdAt":"2022-11-14T13:22:04.367Z","updatedAt":"2022-11-14T13:22:04.367Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"watermelon","description":"","file":{"url":"//images.ctfassets.net/baai5u558zt5/1Dzn8vr5stnUbMBjac88Uf/7589157b7572cb6e6747243dddc34516/Screenshot_2022-11-14_at_14.21.29.png","details":{"size":616537,"image":{"width":753,"height":610}},"fileName":"Screenshot 2022-11-14 at 14.21.29.png","contentType":"image/png"}}},"price":75,"quantity":0,"inStock":false},{"id":3,"name":"Apples","description":"The apple is one of the pome (fleshy) fruits. Apples at harvest vary widely in size, shape, colour, and acidity, but most are fairly round and some shade of red or yellow. The thousands of varieties fall into three broad classes: cider, cooking, and dessert varieties.","image":{"metadata":{"tags":[]},"sys":{"space":{"sys":{"type":"Link","linkType":"Space","id":"baai5u558zt5"}},"id":"2ex2hQkZUPmzpZzTonYrSs","type":"Asset","createdAt":"2022-11-14T13:23:23.910Z","updatedAt":"2022-11-14T13:23:23.910Z","environment":{"sys":{"id":"master","type":"Link","linkType":"Environment"}},"revision":1,"locale":"en-US"},"fields":{"title":"apples","description":"","file":{"url":"//images.ctfassets.net/baai5u558zt5/2ex2hQkZUPmzpZzTonYrSs/bacc594c93c783a77fc3e6baa8ca8f1c/Screenshot_2022-11-14_at_14.23.04.png","details":{"size":648132,"image":{"width":835,"height":716}},"fileName":"Screenshot 2022-11-14 at 14.23.04.png","contentType":"image/png"}}},"price":45,"quantity":150,"inStock":true}])
}