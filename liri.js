// Define dependent variables so they're global
require("dotenv").config();
// NPM Packages & API keys
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
// for read & write
var fs = require("fs");
var query = process.argv[3];

// Check Keys
// console.log(keys);
var option = process.argv[2];
// console.log(option);


// Initialize Spotify client
var spotify = new Spotify(keys.spotify);
switch (option) {
  case "movie-this":
    movieThis(query);
    break;
  case "spotify-this-song":
    spotifyCall(query);
    break;
  case "concert-this":
    concertThis(query);
    break;
  case "do-what-it-says":
    doWhatItSays();
    break;
  default:
    console.log("LIRI DONT KNOW");
  }

// FUNCTIONS
var getArtistInfo = function (artist) {
  return artist.name;
}
// SPOTIFY-THIS-SONG
function spotifyCall(songName) {
  if (!songName) {
    songName = "I want it that way";
  }
  spotify.search({ type: 'track', query: songName }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    var songInfo = data.tracks.items;
    for (var i = 0; i < songInfo.length; i++) {
      // console.log(songInfo);
      console.log(`
        *************************************
        Artist: ${songInfo[i].artists.map(getArtistInfo)}
        Song: ${songInfo[i].name}
        Preview: ${songInfo[i].preview_url}
        Album: ${songInfo[i].album.name}
        *************************************`);
    }
  });
}

// MOVIE-THIS
// Then run a request with axios to the OMDB API with the movie specified
function movieThis(movieName) {
  if (!movieName) {
    movieName = "Mr. Nobody";
  }
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  // // This line is just to help us debug against the actual URL.
  // Creating a request with axios to the queryUrl
  axios.get(queryUrl).then(
    function (response) {
      if (!movieName) {
        movieName = "Mr. Nobody";
      }// console.log(response.data);
      // Data of Movie

      console.log(`Movie Info:
            Title: ${response.data.Title}
            Release Year: ${response.data.Year}
            Rating: ${response.data.Rated}
            Release Country: ${response.data.Country}
            Language: ${response.data.Language}
            Plot: ${response.data.Plot}
            Actors: ${response.data.Actors}`);


    }
  );
}


// CONCERT-THIS
// Then run a request with axios to the BiT API with the artist specified
function concertThis(artist) {
  var bandsQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
  // // This line is just to help us debug against the actual URL.
  // Creating a request with axios to the queryUrl
  axios.get(bandsQueryUrl).then(
    function (response) {
      console.log("_Upcoming Events_");
      console.log("Artist: " + artist + "\nVenue: " + response.data[0].venue.name + "\nLocation: " + response.data[0].venue.country + "\nDate: " + response.data[0].datatime + "\nRock on dude!");
    });
}
// DO-WHAT-IT-SAYS
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    var data = data.split(",");
    for (var i = Math.floor(Math.random * 2) + 1; i < data.length; i++) {
      console.log(data[i]);
    };
    if (error) {
      return console.log(error);
    }

  })
}
