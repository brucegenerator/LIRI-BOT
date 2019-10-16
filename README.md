# LIRI-BOT!

The LIRI bot is a Language Interpretation and Recognition Interface in the fashion of SIRI with some serious exceptions.

The app is written in JavaScript and is executed as a command line interface program in the Node environment. 

LIRI accesses 3 different APIs to return relevant data based on pre-defined user input commands.

The first command the app takes is 'spotify-this-song' accesses the Spotify API and returns results for 'The Sign' if no song is passed as an argument after the first argument.
The results are Artist Name, Album Title, Song Title, and a link to a preview URL.

The second command the app take is 'movie-this' accesses the OMDB API defaults to Mr. Nobody if no argument is passed after the command. The results are Title, Year Released, Rating, Country, Language, Plot, Actors.

The third command 'concert-this' returns Artist Name, Venue, Location and Date and Time of the event. If no argument is passed after the command it will default to the band Bad Religion.