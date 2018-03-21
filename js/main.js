(() =>
console.log('video stuff fired!');

const vidPlayer = document.querySelector('video'),
playButton = document.querySelectorAll('button')[0],
pauseButton = document.querySelectorAll('button') [1];
rewindButton = document.querySelectorAll('button') [2];

function volOn()
{
  vidPlayer.muter= false;
}

function volOff()
{
  vidPlayer.muted = true;
}
function rewindVid()
{
  vidPlayer.currentTime = 0;
}

function playVideo()
{
  vidPlayer.play();
}
function pauseVideo()
{
  vidPlayer.paused();
}

vidPlayer.addEventListener('mouseover', volOn);
vidPlayer.addEventListener('mouseout', volOff);

rewindButton.addEventListener('click' rewindVid);
vidPlayer.addEventListener('click', pauseVideo);
vidPlayer.addEventListener('click', playVideo);

})();
