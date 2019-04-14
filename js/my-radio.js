document.getElementById('the-room-radio').volume = 0.5;

function playRadio() {
  document.getElementById('the-room-radio').play();
  jQuery('.radio-play').css('display', 'none')
  jQuery('.radio-pause').css('display', 'inline-block')
}

function pauseRadio() {
  document.getElementById('the-room-radio').pause();
  jQuery('.radio-play').css('display', 'inline-block')
  jQuery('.radio-pause').css('display', 'none')
}

function setVolume() {
  const mediaClip = document.getElementById("the-room-radio");
  document.getElementById("the-room-radio").value = mediaClip;
  mediaClip.volume = document.getElementById("volume1").value;
}

function volumeRadio() {
  const volumeRange = jQuery('.volume-range')
  if (volumeRange.fadeToggle('fast')) {
    console.log("ok2")
    volumeRange.css('display', 'inline-block')
  } else {
    console.log("ok")
    volumeRange.css('display', 'none')
  }
}

jQuery(document).mouseup(function (e) {
  const container = jQuery(".content-radio-volume");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    jQuery('.volume-range').hide()
  }
})
