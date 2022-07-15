/* global $ */
// DAY 1: Update the songs array with four of your favorites songs. We'll be modifying this in a later lesson (DAY 4).

/*
var songs = ["Fake Love", "Kill this Love", "Break Free", "Timber"];
var artists = ["BTS", "BLACKPINK", "Ariana Grande", "Pitbull"];
var lengths = [519, 313, 408, 335];
var images = [
  "https://static.billboard.com/files/media/01-bts-fake-love-MV-vid-still-2018-billboard-1548-compressed.jpg",
  "https://i.ytimg.com/vi/2S24-y0Ij3Y/maxresdefault.jpg",
  "https://i0.wp.com/popbytes.com/wp-content/uploads/2014/08/ariana.jpg?fit=575%2C300",
  "https://i.pinimg.com/originals/aa/f8/8a/aaf88aa57a644a29555a74bffb28db27.jpg"
];
var links = [
  "https://www.youtube.com/watch?v=7C2z4GqqS5E&list=PLXtsxHnQw9pETX1PLZUO5pajNQ5c_bzM2&index=346",
  "https://www.youtube.com/watch?v=2S24-y0Ij3Y",
  "https://www.youtube.com/watch?v=L8eRzOYhLuw&ab_channel=ArianaGrandeVevo",
  "https://www.youtube.com/watch?v=hHUbLv4ThOo&ab_channel=PitbullVEVO"
];
*/

var playlist = [
  {
    song: "Fake Love",
    artist: "BTS",
    length: 519,
    image:
      "https://static.billboard.com/files/media/01-bts-fake-love-MV-vid-still-2018-billboard-1548-compressed.jpg",
    link:
      "https://www.youtube.com/watch?v=7C2z4GqqS5E&list=PLXtsxHnQw9pETX1PLZUO5pajNQ5c_bzM2&index=346"
  },
  {
    song: "Kill this Love",
    artist: "BLACKPINK",
    length: 313,
    image: "https://i.ytimg.com/vi/2S24-y0Ij3Y/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=2S24-y0Ij3Y"
  },
  {
    song: "Break Free",
    artist: "Ariana Grande",
    length: 408,
    image:
      "https://i0.wp.com/popbytes.com/wp-content/uploads/2014/08/ariana.jpg?fit=575%2C300",
    link:
      "https://www.youtube.com/watch?v=L8eRzOYhLuw&ab_channel=ArianaGrandeVevo"
  },
  {
    song: "Timber",
    artist: "Pitbull",
    length: 335,
    image:
      "https://i.pinimg.com/originals/aa/f8/8a/aaf88aa57a644a29555a74bffb28db27.jpg",
    link: "https://www.youtube.com/watch?v=hHUbLv4ThOo&ab_channel=PitbullVEVO"
  }
];
// DAY 1: Add 4 More arrays to store song artists, song lengths, images, and links for each song.
// Make sure they match the same order as your array above! We'll be modifying this in a later lesson (DAY 4).

function emptySongInfo() {
  $("#songs").empty();
  // DAY 2: Use jQuery to empty all of the remaining divs
  $("#artists").empty();
  $("#lengths").empty();
  $("#images").empty();
  $("#links").empty();
}

function displaySongInfo() {
  emptySongInfo();
  for (let songObject of playlist) {
    $("#songs").append("<p>" + songObject.song + "</p>");
    $("#artists").append("<p>" + songObject.artist + "</p>");
    $("#lengths").append("<p>" + songObject.length + "</p>");
    $("#images").append(`<img src="${songObject.image}"> </img>`);
    $("#links").append(
      `<a href="${songObject.link}" target="_blank"> Link to Song </a href>`
    );
  }
}
// DAY 2: Create a loop to display your song names.
/*for (let song of songs) {
    $("#songs").append("<p>" + song + "</p>");
  }
  // DAY 2: Do something similar to also display your song artists, song lengths, images, and links.
  for (let artist of artists) {
    $("#artists").append("<p>" + artist + "</p>");
  }
  for (let length of lengths) {
    $("#lengths").append("<p>" + length + "</p>");
  }
  for (let image of images) {
    $("#images").append(`<img src="${image}"> </img>`);
  }
  for (let link of links) {
    $("#links").append(
      `<a href="${link}" target="_blank"> Link to Song </a href>`
    );
  }
}
*/

function addSongInfo() {
  // DAY 3: Get the user's song information input from the appropriate HTML elements (ex. song, artist, length, image, link).
  // DAY 3: Add the song information to your playlist using .push(). We'll be modifying this in a later lesson (DAY 5).
  let newSong = $("#song").val();
  let newArtist = $("#artist").val();
  let newLength = $("#length").val();
  let newImage = $("#image").val();
  let newLink = $("#link").val();
  if (newSong !== " " || newArtist !== " ") {
    if (newLink.startsWith("http://") == false) {
      newLink = "http://" + newLink;
    }
    let newSongInfo = {
      song: newSong,
      artist: newArtist,
      length: newLength,
      image: newImage,
      link: newLink
    };
    playlist.push(newSongInfo);
  }
  /* songs.push(newSong);
  artists.push(newArtist);
  lengths.push(newLength);
  images.push(newImage);
  links.push(newLink);
  */
  
  $("#song").val("");
  $("#artist").val("");
  $("#length").val("");
  $("#image").val("");
  $("#link").val("");
}

// DAY 3: Add click handler that retrieves user input, pushes new items to your song arrays, and displays the result to the screen.
// The above functions you've made previously will help you out with this!

$("#add").click(function() {
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
