require("dotenv").config();

const Spotify = require("node-spotify-api");
const axios = require('axios');
const moment = require('moment')
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

		
			console.log(`\n===== TRACK INFO =====\n`)
			console.log(`track title: ${tracks.name}`)
			console.log(`track artist(s): ${artistArr}`)
			console.log(`track album: ${tracks.album.name}`)
			console.log(`track preivew URL: ${tracks.external_urls.spotify}\n`)
		});
		break
	
	case "movie-this":
		if (searchTerm == "") {
			searchTerm = "Mr. Nobody"
		}

		axios.get(`http://www.omdbapi.com/?t=${searchTerm}&y=&plot=short&apikey=trilogy`).then(
			function(response) {
				// console.log(response.data);

				console.log(`\n===== MOVIE INFO =====\n`)
				console.log(`movie title: ${response.data.Title}`)
				console.log(`year of release: ${response.data.Year}`)
				console.log(`IMDB rating: ${response.data.imdbRating}`)
				console.log(`Rotten Tomatoes rating: ${response.data.Ratings[1].Value}`)
				console.log(`production country: ${response.data.Country}`)
				console.log(`language: ${response.data.Language}`)
				console.log(`plot: ${response.data.Plot}`)
				console.log(`actors: ${response.data.Actors}\n`)
			}
		);
		break
	case "concert-this":
		axios.get(`https://rest.bandsintown.com/artists/${searchTerm}/events?app_id=codingbootcamp`).then(
			function(response) {
				console.log('\n===== CONCERTS =====\n')
				for(let i=0; i < response.data.length; i++) {
					let date = moment(response.data[i].datetime).format('LLL') 
					
					console.log(`venue: ${response.data[i].venue.name}`)
					console.log(`${response.data[i].venue.city}, ${response.data[i].venue.country}`)
					console.log(`${date}\n`)
				}
			}
		);
		break;

}


