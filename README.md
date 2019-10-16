# LIRI-BOT!

The LIRI bot is a Language Interpretation and Recognition Interface in the fashion of SIRI with some serious exceptions.

The app is written in JavaScript and is executed as a command line interface program in the Node environment. 

LIRI accesses 3 different APIs to return relevant data based on pre-defined user input commands.

The first command the app takes is 'spotify-this-song' accesses the Spotify API and returns results for 'The Sign' if no song is passed as an argument after the first argument.
The results are Artist Name, Album Title, Song Title, and a link to a preview URL.

The second command the app take is 'movie-this' accesses the OMDB API defaults to Mr. Nobody if no argument is passed after the command. The results are Title, Year Released, Rating, Country, Language, Plot, Actors.

The third command 'concert-this' returns Artist Name, Venue, Location and Date and Time of the event. If no argument is passed after the command it will default to the band Bad Religion.

# Screenshots of the app functionality
Spotify-this-song No Argument
![Spotify-this-song No Argument](/assets/spotify-this-song.png)
Spotify-this-song No Argument with results (defaults to a search for "The Sign")
![Spotify-this-song No Argument with results](/assets/spotify-this-song-result.png)
Spotify-this-song With Argument Passed
![Spotify-this-song With Argument Passed](/assets/spotify-this-song-country-grammar.png)
movie-this No Argument
![movie-this No Argument](/assets/movie-this.png)
movie-this-result No Argument with  (defaults to "Mr Nobody")
![movie-this-result No Argument with results](/assets/movie-this-result.png)
movie-this Fight Club With Argument Passed
![movie-this Fight Club With Argument Passed](/assets/movie-this-fight-club.png)
movie-this No Argument (defaults to a search for rock band Tool)
![movie-this No Argument](/assets/concert-this-result-default.png)
movie-this With Argument Passed
![movie-this With Argument Passed](/assets/concert-this-result-ariana-grande.png)


# To Run the App
The app is executed via the command line once you have navigated to the correct folder with the liri.js file

Running 'npm i' will download the necessary modules for accessing the APIs

Users can execute the commands via NodeJS with 'node liri <command here>'

List of available commands:
'spotify-this-song <string>'
'movie-this <string>'
'concert-this <string>'

# Bugs/Known Issues
The current state of the project does contain non-working code for a 'do-what-it-says' command which would read a relative local text file named 'random' and execute any of the three primary commands with a built in default search option. 

