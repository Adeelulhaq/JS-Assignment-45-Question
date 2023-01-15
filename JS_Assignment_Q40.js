function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Sajjad Ali", "love letter"));
console.log(make_album("Junaid Jamshad", "Dil Dil pakista", 16));
console.log(make_album("Qurat-ul-Ain Balouch", "Mahee", 6));