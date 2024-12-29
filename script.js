$(function(){

    if (!$('.envelope').hasClass('open')){
      $('.envelope').click(function(){
        $(this).removeClass('new').addClass('open');

        loadTrack();
        setTimeout(() => {
            audio.play();
        }, 2000);
      });
    }
    
  });

const audio = new Audio();

const track = {
    src: "audio.mp3",
    albumArt: "./img-album.webp",
    trackTitle: "Lengsir Wengi",
    bandName: "Fuyo Mafuyu",
    duration: "3:09" // Format: "minutes:seconds"
};

let currentTrackIndex = 0;

function loadTrack() {
    audio.src = track.src;
    document.getElementById("albumArt").src = track.albumArt;
}