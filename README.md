# liri-bot

A terminal window application utilizing node to take in specific commands and information and return a result from an API specifically in regards to  movie info, song info,concerts.

## Getting Started

This application requires node.js. [node.js](https://nodejs.org/en/))
Follow this link for doxumentation and install instructions.

### Installation

Install application to an accessible directory. Once installed navigate to the application directory in your terminal and use node to install the necessary packages with

```
npm i
```

Once the node packages have been installed, we are ready to use the app!

## Usage

Using node, we will be running the application in the terminal. From the directory, in the terminal, we'll start by using typing

```
node liri.js
```

this will be the base of out command. From here, we can add parameters to tailor the search to specific things.

### spotify-this-song

```
node liri.js spotify-this-song SONG NAME HERE
```

this commmand will allow us to request information for a specific song from the Spotify API. The response will look like this -

![spotify-this-song.png](/pictures/spotify-this-song.png)

### movie-this

```
node liri.js movie-this MOVIE TITLE HERE
```

this command will allow us to request information for a specific mvoie from the OMDB api. The response will look like this -

![movie-info.png](/pictures/movie-this.png)

### concert-this

```
node liri.js concert-this ARTIST/BAND HERE
```

this command will allow us to request information for a specifc band in regards to upcoming concerts. The response will look like this -

![concert-this.png](/pictures/concert-this.png)

### do-what-it-says
```
node liri.js do-what-it-says
```

this command will allow us to use random.txt as both our command and search term. Text in this file must be a single line with no extra spaces and one comma seperating the command and search term,formatted like so -

**movie-this,The Matrix**

once the command is run, it will return the information requested. 

## Built With
* [node.js](https://nodejs.org/en/) - for terminal javascript
* [npm package - node-spotify-api](https://www.npmjs.com/package/node-spotify-api) - used for Spotify API request
* [npm package - dotenv](https://www.npmjs.com/package/dotenv) - for API key storage
* [npm package - axios](https://www.npmjs.com/package/axios) - for backend API calls

## Authors
Paul Davis - UCF Continuing Education Coding Bootcamp