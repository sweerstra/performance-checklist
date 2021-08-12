import contentful from 'contentful';

var client = contentful.createClient({
	space: 'quyexnz25fii',
	accessToken: 'GztrA8GobZNJTAPBstzRxiUkxZxfQK5zxfMUI3C1N6w'
})

export default client.getEntry('3K9b0esdy0q0yGqgW2g6Ke')
	  .then(function (entry) {
	  console.log(entry.sys)
})
