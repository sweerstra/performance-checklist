import contentful from 'contentful';

var client = contentful.createClient({
	space: CONTENTFUL_SPACE_ID,
	accessToken: CONTENTFUL_ACCESS_TOKEN
})

export default client.getEntry('3K9b0esdy0q0yGqgW2g6Ke')
	  .then(function (entry) {
	  console.log(entry.sys)
})
