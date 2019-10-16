// Define dependent variables so they're global
require("dotenv").config();
// NPM Packages & API keys
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var axios = require("axios");
var moment = require("moment");
// for read & write
var fs = require("fs");
// v/ar query = process.argv[3];

// Check Keys
// console.log(keys);
// var option = process.argv[2];
// console.log(option);


// Initialize Spotify client
var spotify = new Spotify(keys.spotify);

function init(option = process.argv[2], query = process.argv.slice(3).join(" ")) {
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
}

// FUNCTIONS
var getArtistInfo = function (artist) {
  return artist.name;
}
// SPOTIFY-THIS-SONG
function spotifyCall(songName) {
  if (!songName) {
    songName = "The Sign";
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

function concertThis(artist) {
  if (!artist) {
    var artist = "Bad Religion";
  }
  var bandsQueryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(bandsQueryUrl).then(
    function (response) {
      console.log("_Upcoming Events_");
      console.log(`
      Artist: ${artist}
      Venue: ${response.data[0].venue.name}
      Location: ${response.data[0].venue.city + ", " + response.data[0].venue.region + ", " + response.data[0].venue.country}
      Date: ${response.data[0].datetime}`);
    });
}
// DO - WHAT - IT - SAYS
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    console.log(data);
    if (error) throw error;
    var dataOne = data.split(",");

    init(dataOne[0], dataOne[1]);
    
  }) 
  }
  init();
