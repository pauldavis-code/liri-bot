require("dotenv").config();

var Spotify = require("node-spotify-api");
var axios = require('axios');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var searchType = process.argv[2]
let temp = process.argv.splice(0,3)
var searchTerm = process.argv.join(" ")


switch(searchType) {

	case "spotify-this-song":
		spotify.search({ type: 'track', query: searchTerm, limit: 1 }, function(err, response) {
			if (err) { return console.log('Error occurred: ' + err);}

			let tracks = response.tracks.items[0]
			let artistArr = []

			for (let i = 0; i < tracks.artists.length; i++) {
				artistArr.push(tracks.artists[i].name)
			}


			console.log(`\ntrack title: ${tracks.name}`)
			console.log(`track artist(s): ${artistArr}`)
			console.log(`track album: ${tracks.album.name}`)
			console.log(`track preivew URL: ${tracks.external_urls.spotify}\n`)
		});
		break
	
	case "movie-this":
		axios.get(`http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=trilogy`).then(
			function(response) {
				console.log(response.data);
			}
		);
		break
}


