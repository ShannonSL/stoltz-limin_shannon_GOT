(() => {
console.log('video stuff fired!');

// add to the String prototype to cap the first letter
// review this first thing next week!
String.prototype.capIt = function() { return this.replace(this.charAt(), this.charAt().toUpperCase()); };

//variables at the top
const sigils = document.querySelectorAll('.sigilContainer'),
      lightbox = document.querySelector('.lightbox'),
      closeLightbox = document.querySelector('.close-lightbox'),
      vidPlayer = document.querySelector('video'),
      changeMe = document.querySelector('#changeMe'),
      videoTitle = document.querySelector('#videoTitle'),
      playPause = document.querySelector('.play-pause'),
      ffWd = document.querySelector('.forward'),
      rWnd = document.querySelector('.rewind'),
      imageBanner = document.querySelector('#houseImages');

//methods / functions in the middle
function loadMovie(){
  //debugger;
  // 1.turn on the lightbox
lightbox.classList.add('show-lightbox');

// 2. grab the right video based on the class name -> the split yields the name
  var house = this.className.split(' ')[1].capIt();

  // 3. put the path together and make the video load and play
  vidPlayer.src =`video/House-${house}.${vidPlayer.currentSrc.split('.')[1]}`;

changeMe.textContent=house;
videoTitle.textContent=house;
  vidPlayer.load();
  vidPlayer.play();

  animateBanners(this.dataset.offset);
}

function animateBanners(offset){
  console.log(600 * offset); // this should give us the value that we need!

// animate the banners across the screen
//600 is the width of each image -> the sum / product is how much it needs to move
  imageBanner.style.right = (offset * 600) + "px";
}

function closeLBox(){
  lightbox.classList.remove('show-lightbox');
  vidPlayer.pause();
  vidPlayer.currentTime = 0;
}

function togglePlay(){
  //debugger;
  var theSVG = this.firstElementChild;
  theSVG.dataset.icon ="play-circle";
  if (vidPlayer.paused) {
    vidPlayer.play();
    theSVG.dataset.icon ="pause-circle";
  }
  else {
    vidPlayer.pause();
    theSVG.dataset.icon ="play-circle";
  }
}

function ffWdVid () {
  //look at adjust playback rate => MDN using video
}

function rWindVid () {
  //look at adjust playback rate => MDN using video
}

// events at the bottom
sigils.forEach(sigil => sigil.addEventListener('click', loadMovie));
closeLightbox.addEventListener('click', closeLBox);

vidPlayer.addEventListener('ended',closeLBox);
playPause.addEventListener('click', togglePlay);
ffWd.addEventListener('click', ffWdVid);
rWnd.addEventListener('click',rWindVid);
})();
