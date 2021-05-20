// audio one

  const audioPlayer = document.querySelector(".audio-player");
const audio = new Audio(
  "assets/interviews/Pur·suit_Angel&Shira_final.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio);

audio.addEventListener(
  "loadeddata",
  () => {
    audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
      audio.duration
    );
    audio.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline = audioPlayer.querySelector(".timeline");
timeline.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
  audio.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider = audioPlayer.querySelector(".controls .volume-slider");
volumeSlider.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio.volume = newVolume;
  audioPlayer.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer.querySelector(".progress");
  progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
  audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
    audio.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn = audioPlayer.querySelector(".controls .toggle-play");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      playBtn.classList.remove("play1");
      playBtn.classList.add("pause1");
      audio.play();
    } else {
      playBtn.classList.remove("pause1");
      playBtn.classList.add("play1");
      audio.pause();
    }
  },
  false
);

audioPlayer.querySelector(".volume-button").addEventListener("click", () => {
  const volumeEl = audioPlayer.querySelector(".volume-container .volume");
  audio.muted = !audio.muted;
  if (audio.muted) {
    volumeEl.classList.remove("icono-volumeMedium");
    volumeEl.classList.add("icono-volumeMute");
  } else {
    volumeEl.classList.add("icono-volumeMedium");
    volumeEl.classList.remove("icono-volumeMute");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// audio two

  const audioPlayer2 = document.querySelector(".audio-player-2");
const audio2 = new Audio(
  "assets/interviews/Pur·suit_kenya&alex_final 3.27.42 PM.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio2);

audio2.addEventListener(
  "loadeddata",
  () => {
    audioPlayer2.querySelector(".time-2 .length-2").textContent = getTimeCodeFromNum2(
      audio2.duration
    );
    audio2.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline2 = audioPlayer2.querySelector(".timeline-2");
timeline2.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline2).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio2.duration;
  audio2.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider2 = audioPlayer2.querySelector(".controls-2 .volume-slider-2");
volumeSlider2.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider2).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio2.volume = newVolume;
  audioPlayer2.querySelector(".controls-2 .volume-percentage-2").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer2.querySelector(".progress-2");
  progressBar.style.width = audio2.currentTime / audio2.duration * 100 + "%";
  audioPlayer2.querySelector(".time-2 .current-2").textContent = getTimeCodeFromNum2(
    audio2.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn2 = audioPlayer2.querySelector(".controls-2 .toggle-play-2");
playBtn2.addEventListener(
  "click",
  () => {
    if (audio2.paused) {
      playBtn2.classList.remove("play2");
      playBtn2.classList.add("pause2");
      audio2.play();
    } else {
      playBtn.classList.remove("pause2");
      playBtn.classList.add("play2");
      audio2.pause();
    }
  },
  false
);

audioPlayer2.querySelector(".volume-button-2").addEventListener("click", () => {
  const volumeEl = audioPlayer2.querySelector(".volume-container-2 .volume-2");
  audio2.muted = !audio2.muted;
  if (audio2.muted) {
    volumeEl.classList.remove("icono-volumeMedium-2");
    volumeEl.classList.add("icono-volumeMute-2");
  } else {
    volumeEl.classList.add("icono-volumeMedium-2");
    volumeEl.classList.remove("icono-volumeMute-2");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum2(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// audio three

  const audioPlayer3 = document.querySelector(".audio-player-3");
const audio3 = new Audio(
  "assets/interviews/Pur·suit_Kiy&Jay_final 3.27.42 PM.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio3);

audio3.addEventListener(
  "loadeddata",
  () => {
    audioPlayer3.querySelector(".time-3 .length-3").textContent = getTimeCodeFromNum(
      audio3.duration
    );
    audio3.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline3 = audioPlayer3.querySelector(".timeline-3");
timeline3.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline3).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio3.duration;
  audio3.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider3 = audioPlayer3.querySelector(".controls-3 .volume-slider-3");
volumeSlider3.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider3).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio3.volume = newVolume;
  audioPlayer3.querySelector(".controls-3 .volume-percentage-3").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer3.querySelector(".progress-3");
  progressBar.style.width = audio3.currentTime / audio3.duration * 100 + "%";
  audioPlayer3.querySelector(".time-3 .current-3").textContent = getTimeCodeFromNum3(
    audio3.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn3 = audioPlayer3.querySelector(".controls-3 .toggle-play-3");
playBtn3.addEventListener(
  "click",
  () => {
    if (audio3.paused) {
      playBtn3.classList.remove("play");
      playBtn3.classList.add("pause");
      audio3.play();
    } else {
      playBtn3.classList.remove("pause");
      playBtn3.classList.add("play");
      audio3.pause();
    }
  },
  false
);

audioPlayer3.querySelector(".volume-button-3").addEventListener("click", () => {
  const volumeEl = audioPlayer3.querySelector(".volume-container-3 .volume-3");
  audio3.muted = !audio3.muted;
  if (audio3.muted) {
    volumeEl.classList.remove("icono-volumeMedium-3");
    volumeEl.classList.add("icono-volumeMute-3");
  } else {
    volumeEl.classList.add("icono-volumeMedium-3");
    volumeEl.classList.remove("icono-volumeMute-3");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum3(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// audio four

  const audioPlayer4 = document.querySelector(".audio-player-4");
const audio4 = new Audio(
  "assets/interviews/Pur·suit_Auston&Jessie_final 3.27.42 PM.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio4);

audio4.addEventListener(
  "loadeddata",
  () => {
    audioPlayer4.querySelector(".time-4 .length-4").textContent = getTimeCodeFromNum4(
      audio4.duration
    );
    audio4.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline4 = audioPlayer4.querySelector(".timeline-4");
timeline4.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline4).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio4.duration;
  audio4.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider4 = audioPlayer4.querySelector(".controls-4 .volume-slider-4");
volumeSlider4.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider4).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio4.volume = newVolume;
  audioPlayer4.querySelector(".controls-4 .volume-percentage-4").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer4.querySelector(".progress-4");
  progressBar.style.width = audio4.currentTime / audio4.duration * 100 + "%";
  audioPlayer4.querySelector(".time-4 .current-4").textContent = getTimeCodeFromNum4(
    audio4.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn4 = audioPlayer4.querySelector(".controls-4 .toggle-play-4");
playBtn4.addEventListener(
  "click",
  () => {
    if (audio4.paused) {
      playBtn4.classList.remove("play");
      playBtn4.classList.add("pause");
      audio4.play();
    } else {
      playBtn4.classList.remove("pause");
      playBtn4.classList.add("play");
      audio4.pause();
    }
  },
  false
);

audioPlayer4.querySelector(".volume-button-4").addEventListener("click", () => {
  const volumeEl = audioPlayer4.querySelector(".volume-container-4 .volume-4");
  audio4.muted = !audio4.muted;
  if (audio4.muted) {
    volumeEl.classList.remove("icono-volumeMedium-4");
    volumeEl.classList.add("icono-volumeMute-4");
  } else {
    volumeEl.classList.add("icono-volumeMedium-4");
    volumeEl.classList.remove("icono-volumeMute-4");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum4(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// audio five

  const audioPlayer5 = document.querySelector(".audio-player-5");
const audio5 = new Audio(
  "assets/interviews/Pur·suit_Tati&Rahel_final_final.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio5);

audio5.addEventListener(
  "loadeddata",
  () => {
    audioPlayer5.querySelector(".time-5 .length-5").textContent = getTimeCodeFromNum5(
      audio5.duration
    );
    audio5.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline5 = audioPlayer5.querySelector(".timeline-5");
timeline5.addEventListener("click", e => {
  const timelineWidth5 = window.getComputedStyle(timeline5).width;
  const timeToSeek5 = e.offsetX / parseInt(timelineWidth5) * audio5.duration;
  audio5.currentTime = timeToSeek5;
}, false);

//click volume slider to change volume
const volumeSlider5 = audioPlayer5.querySelector(".controls-5 .volume-slider-5");
volumeSlider5.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider5).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio5.volume = newVolume;
  audioPlayer5.querySelector(".controls-5 .volume-percentage-5").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer5.querySelector(".progress-5");
  progressBar.style.width = audio5.currentTime / audio5.duration * 100 + "%";
  audioPlayer5.querySelector(".time-5 .current-5").textContent = getTimeCodeFromNum5(
    audio5.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn5 = audioPlayer5.querySelector(".controls-5 .toggle-play-5");
playBtn5.addEventListener(
  "click",
  () => {
    if (audio5.paused) {
      playBtn5.classList.remove("play5");
      playBtn5.classList.add("pause5");
      audio5.play();
    } else {
      playBtn5.classList.remove("pause5");
      playBtn5.classList.add("play5");
      audio5.pause();
    }
  },
  false
);

audioPlayer5.querySelector(".volume-button-5").addEventListener("click", () => {
  const volumeEl = audioPlayer5.querySelector(".volume-container-5 .volume-5");
  audio5.muted = !audio5.muted;
  if (audio5.muted) {
    volumeEl.classList.remove("icono-volumeMedium-5");
    volumeEl.classList.add("icono-volumeMute-5");
  } else {
    volumeEl.classList.add("icono-volumeMedium-5");
    volumeEl.classList.remove("icono-volumeMute-5");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum5(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// audio six

  const audioPlayer6 = document.querySelector(".audio-player-6");
const audio6 = new Audio(
  "assets/interviews/Pur·suit_Ericka&Ebony_final 3.27.42 PM.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio6);

audio6.addEventListener(
  "loadeddata",
  () => {
    audioPlayer6.querySelector(".time-6 .length-6").textContent = getTimeCodeFromNum6(
      audio6.duration
    );
    audio6.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline6 = audioPlayer6.querySelector(".timeline-6");
timeline6.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline6).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio6.duration;
  audio6.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider6 = audioPlayer6.querySelector(".controls-6 .volume-slider-6");
volumeSlider6.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider6).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio6.volume = newVolume;
  audioPlayer6.querySelector(".controls-6 .volume-percentage-6").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer6.querySelector(".progress-6");
  progressBar.style.width = audio6.currentTime / audio6.duration * 100 + "%";
  audioPlayer6.querySelector(".time-6 .current-6").textContent = getTimeCodeFromNum6(
    audio6.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn6 = audioPlayer6.querySelector(".controls-6 .toggle-play-6");
playBtn6.addEventListener(
  "click",
  () => {
    if (audio6.paused) {
      playBtn6.classList.remove("play6");
      playBtn6.classList.add("pause6");
      audio6.play();
    } else {
      playBtn6.classList.remove("pause6");
      playBtn6.classList.add("play6");
      audio6.pause();
    }
  },
  false
);

audioPlayer6.querySelector(".volume-button-6").addEventListener("click", () => {
  const volumeEl = audioPlayer6.querySelector(".volume-container-6 .volume-6");
  audio6.muted = !audio6.muted;
  if (audio6.muted) {
    volumeEl.classList.remove("icono-volumeMedium-6");
    volumeEl.classList.add("icono-volumeMute-6");
  } else {
    volumeEl.classList.add("icono-volumeMedium-6");
    volumeEl.classList.remove("icono-volumeMute-6");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum6(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}

// audio seven

  const audioPlayer7 = document.querySelector(".audio-player-7");
const audio7 = new Audio(
  "assets/interviews/Atheel-SkinContact-Meditation.mp3"
);
//credit for song: Adrian kreativaweb@gmail.com

console.dir(audio7);

audio7.addEventListener(
  "loadeddata",
  () => {
    audioPlayer7.querySelector(".time-7 .length-7").textContent = getTimeCodeFromNum7(
      audio7.duration
    );
    audio7.volume = .75;
  },
  false
);

//click on timeline to skip around
const timeline7 = audioPlayer7.querySelector(".timeline-7");
timeline7.addEventListener("click", e => {
  const timelineWidth = window.getComputedStyle(timeline7).width;
  const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio7.duration;
  audio7.currentTime = timeToSeek;
}, false);

//click volume slider to change volume
const volumeSlider7 = audioPlayer7.querySelector(".controls-7 .volume-slider-7");
volumeSlider7.addEventListener('click', e => {
  const sliderWidth = window.getComputedStyle(volumeSlider7).width;
  const newVolume = e.offsetX / parseInt(sliderWidth);
  audio7.volume = newVolume;
  audioPlayer7.querySelector(".controls-7 .volume-percentage-7").style.width = newVolume * 100 + '%';
}, false)

//check audio percentage and update time accordingly
setInterval(() => {
  const progressBar = audioPlayer7.querySelector(".progress-7");
  progressBar.style.width = audio7.currentTime / audio7.duration * 100 + "%";
  audioPlayer7.querySelector(".time-7 .current-7").textContent = getTimeCodeFromNum7(
    audio7.currentTime
  );
}, 500);

//toggle between playing and pausing on button click
const playBtn7 = audioPlayer7.querySelector(".controls-7 .toggle-play-7");
playBtn7.addEventListener(
  "click",
  () => {
    if (audio7.paused) {
      playBtn7.classList.remove("play7");
      playBtn7.classList.add("pause7");
      audio7.play();
    } else {
      playBtn7.classList.remove("pause7");
      playBtn7.classList.add("play7");
      audio7.pause();
    }
  },
  false
);

audioPlayer7.querySelector(".volume-button-7").addEventListener("click", () => {
  const volumeEl = audioPlayer7.querySelector(".volume-container-7 .volume-7");
  audio7.muted = !audio7.muted;
  if (audio7.muted) {
    volumeEl.classList.remove("icono-volumeMedium-7");
    volumeEl.classList.add("icono-volumeMute-7");
  } else {
    volumeEl.classList.add("icono-volumeMedium-7");
    volumeEl.classList.remove("icono-volumeMute-7");
  }
});

//turn 128 seconds into 2:08
function getTimeCodeFromNum7(num) {
  let seconds = parseInt(num);
  let minutes = parseInt(seconds / 60);
  seconds -= minutes * 60;
  const hours = parseInt(minutes / 60);
  minutes -= hours * 60;

  if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
  return `${String(hours).padStart(2, 0)}:${minutes}:${String(
    seconds % 60
  ).padStart(2, 0)}`;
}







// videos full screen 
function toggleFullScreenOR() {
  if (myVideoorange.requestFullscreen) {
      if (document.fullScreenElement) {
          document.cancelFullScreen();
      } else {
          myVideoorange.requestFullscreen();
      }
  }
  else if (myVideoorange.msRequestFullscreen) {
      if (document.msFullscreenElement) {
          document.msExitFullscreen();
      } else {
          myVideoorange.msRequestFullscreen();
      }
  }
  else if (myVideoorange.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
          document.mozCancelFullScreen();
      } else {
          myVideoorange.mozRequestFullScreen();
      }
  }
  else if (myVideoorange.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
          document.webkitCancelFullScreen();
      } else {
          myVideoorange.webkitRequestFullscreen();
      }
  }
  else {
      alert("Fullscreen API is not supported");
      document.getElementById('controlfullscreen').disabled = true;
  }
}

function toggleFullScreenCAR() {
  if (myVideocar.requestFullscreen) {
      if (document.fullScreenElement) {
          document.cancelFullScreen();
      } else {
          myVideocar.requestFullscreen();
      }
  }
  else if (myVideocar.msRequestFullscreen) {
      if (document.msFullscreenElement) {
          document.msExitFullscreen();
      } else {
          myVideocar.msRequestFullscreen();
      }
  }
  else if (myVideocar.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
          document.mozCancelFullScreen();
      } else {
          myVideocar.mozRequestFullScreen();
      }
  }
  else if (myVideocar.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
          document.webkitCancelFullScreen();
      } else {
          myVideocar.webkitRequestFullscreen();
      }
  }
  else {
      alert("Fullscreen API is not supported");
      document.getElementById('controlfullscreen').disabled = true;
  }
}

$(document).ready(function() {
    	    $(window).scroll(function () {
        var scrollval = $(window).scrollTop();      

        if (scrollval >= 500) {
            $("#skincontact-logo-container").css("opacity", 0);
        }
        if (scrollval >= 4400) {
            $("#skincontact-logo-container").css("opacity", 1);
        }
        if (scrollval >= 5500) {
            $("#skincontact-logo-container").css("opacity", 0);
        } 
        if (scrollval >= 8800) {
            $("#skincontact-logo-container").css("opacity", 1);
        } 
        if (scrollval >= 10940) {
            $("#skincontact-logo-container").css("opacity", 0);
        } 
        if (scrollval >= 15100) {
            $("#skincontact-logo-container").css("opacity", 1);
        }  
        if (scrollval >= 17580) {
            $("#skincontact-logo-container").css("opacity", 0);
        }
        if (scrollval >= 24800) {
            $("#skincontact-logo-container").css("opacity", 1);
        }
        if (scrollval >= 26400) {
            $("#skincontact-logo-container").css("opacity", 0);
        }
        if (scrollval >= 27800) {
            $("#skincontact-logo-container").css("opacity", 1);
        } 
        if (scrollval >= 28500) {
            $("#skincontact-logo-container").css("opacity", 0);
        }                                                                    
    });
   });

// index sextion switch

$(document).ready(function(){
  $("#index-button").click(function(){
    $("#content-desktop").hide();
    $("#index-content").show();
  });
}); 


// videos 

function toggleFullScreen() {
  if (myVideo.requestFullscreen) {
      if (document.fullScreenElement) {
          document.cancelFullScreen();
      } else {
          myVideo.requestFullscreen();
      }
  }
  else if (myVideo.msRequestFullscreen) {
      if (document.msFullscreenElement) {
          document.msExitFullscreen();
      } else {
          myVideo.msRequestFullscreen();
      }
  }
  else if (myVideo.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
          document.mozCancelFullScreen();
      } else {
          myVideo.mozRequestFullScreen();
      }
  }
  else if (myVideo.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
          document.webkitCancelFullScreen();
      } else {
          myVideo.webkitRequestFullscreen();
      }
  }
  else {
      alert("Fullscreen API is not supported");
      document.getElementById('controlfullscreen').disabled = true;
  }
}

	function togglePlay() {
  var myAudio = document.getElementById("myAudio");
  return myAudio.paused ? myAudio.play() : myAudio.pause();
};

$(document).ready(function() {
  $("#play-button-container").click(function() {
    $("#play-button-container").toggleClass("new");
  });
});

window.open(
  'https://open.spotify.com/playlist/3LoRBtgXSlwvpiROHRcxv6?si=0574ac986f4c4c46&nd=1',
  '_blank' // <- This is what makes it open in a new window.
);

	function togglePlay2() {
  var myAudio2 = document.getElementById("myAudio2");
  return myAudio2.paused ? myAudio2.play() : myAudio2.pause();
};

$(document).ready(function() {
  $("#play-button-container-two").click(function() {
    $("#play-button-container-two").toggleClass("new2");
  });
});

	function toggleFullScreen1() {
  if (vid.requestFullscreen) {
      if (document.fullScreenElement) {
          document.cancelFullScreen();
      } else {
          vid.requestFullscreen();
      }
  }
  else if (vid.msRequestFullscreen) {
      if (document.msFullscreenElement) {
          document.msExitFullscreen();
      } else {
          vid.msRequestFullscreen();
      }
  }
  else if (vid.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
          document.mozCancelFullScreen();
      } else {
          vid.mozRequestFullScreen();
      }
  }
  else if (vid.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
          document.webkitCancelFullScreen();
      } else {
          vid.webkitRequestFullscreen();
      }
  }
  else {
      alert("Fullscreen API is not supported");
      document.getElementById('controlfullscreen').disabled = true;
  }
}

	window.open(
  'https://open.spotify.com/playlist/5mtffDvFfCrMaBlz8UFdOM?si=ac95555d01be43eb&nd=1',
  '_blank' // <- This is what makes it open in a new window.
);

	window.open(
  'https://open.spotify.com/playlist/1GOJMmjfkv6qhnboHBHCnj?si=59026d6c9ca14602&nd=1',
  '_blank' // <- This is what makes it open in a new window.
);

	function togglePlay3() {
  var myAudio3 = document.getElementById("myAudio3");
  return myAudio3.paused ? myAudio3.play() : myAudio3.pause();
};

$(document).ready(function() {
  $("#play-button-container-three").click(function() {
    $("#play-button-container-three").toggleClass("new3");
  });
});

	function toggleFullScreen2() {
  if (vid2.requestFullscreen) {
      if (document.fullScreenElement) {
          document.cancelFullScreen();
      } else {
          vid2.requestFullscreen();
      }
  }
  else if (vid2.msRequestFullscreen) {
      if (document.msFullscreenElement) {
          document.msExitFullscreen();
      } else {
          vid2.msRequestFullscreen();
      }
  }
  else if (vid2.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
          document.mozCancelFullScreen();
      } else {
          vid2.mozRequestFullScreen();
      }
  }
  else if (vid2.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
          document.webkitCancelFullScreen();
      } else {
          vid2.webkitRequestFullscreen();
      }
  }
  else {
      alert("Fullscreen API is not supported");
      document.getElementById('controlfullscreen').disabled = true;
  }
}

	function togglePlay4() {
  var myAudio4 = document.getElementById("myAudio4");
  return myAudio4.paused ? myAudio4.play() : myAudio4.pause();
};

$(document).ready(function() {
  $("#play-button-container-four").click(function() {
    $("#play-button-container-four").toggleClass("new4");
  });
});

	window.open(
  'https://open.spotify.com/playlist/3U41OIYACDl8CBkFdM7GIy?si=fc56405e7ec84906&nd=1',
  '_blank' // <- This is what makes it open in a new window.
);

	function togglePlay5() {
  var myAudio5 = document.getElementById("myAudio5");
  return myAudio5.paused ? myAudio5.play() : myAudio5.pause();
};

$(document).ready(function() {
  $("#play-button-container-five").click(function() {
    $("#play-button-container-five").toggleClass("new5");
  });
});

	function togglePlay6() {
  var myAudio6 = document.getElementById("myAudio6");
  return myAudio6.paused ? myAudio6.play() : myAudio6.pause();
};

$(document).ready(function() {
  $("#play-button-container-six").click(function() {
    $("#play-button-container-six").toggleClass("new6");
  });
});
	
	function toggleFullScreen3() {
  if (vid3.requestFullscreen) {
      if (document.fullScreenElement) {
          document.cancelFullScreen();
      } else {
          vid3.requestFullscreen();
      }
  }
  else if (vid3.msRequestFullscreen) {
      if (document.msFullscreenElement) {
          document.msExitFullscreen();
      } else {
          vid3.msRequestFullscreen();
      }
  }
  else if (vid3.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
          document.mozCancelFullScreen();
      } else {
          vid3.mozRequestFullScreen();
      }
  }
  else if (vid3.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
          document.webkitCancelFullScreen();
      } else {
          vid3.webkitRequestFullscreen();
      }
  }
  else {
      alert("Fullscreen API is not supported");
      document.getElementById('controlfullscreen').disabled = true;
  }
}

	function togglePlay7() {
  var myAudio7 = document.getElementById("myAudio7");
  return myAudio7.paused ? myAudio7.play() : myAudio7.pause();
};

$(document).ready(function() {
  $("#play-button-container-seven").click(function() {
    $("#play-button-container-seven").toggleClass("new7");
  });
});

	
	function toggleFullScreen4() {
  if (vid4.requestFullscreen) {
      if (document.fullScreenElement) {
          document.cancelFullScreen();
      } else {
          vid4.requestFullscreen();
      }
  }
  else if (vid4.msRequestFullscreen) {
      if (document.msFullscreenElement) {
          document.msExitFullscreen();
      } else {
          vid4.msRequestFullscreen();
      }
  }
  else if (vid4.mozRequestFullScreen) {
      if (document.mozFullScreenElement) {
          document.mozCancelFullScreen();
      } else {
          vid4.mozRequestFullScreen();
      }
  }
  else if (vid4.webkitRequestFullscreen) {
      if (document.webkitFullscreenElement) {
          document.webkitCancelFullScreen();
      } else {
          vid4.webkitRequestFullscreen();
      }
  }
  else {
      alert("Fullscreen API is not supported");
      document.getElementById('controlfullscreen').disabled = true;
  }
}

	$(document).ready(function() { 
 $("#index-button-2").click(function() {
         $("#index-middle-one").slideDown("slow"); 
         $("#index-middle-two").slideDown("slow","linear"); 
         $("#index-middle-three").slideDown("slow","linear"); 
         $("#index-middle-four").slideDown("slow","linear"); 
         $("#index-bottom").slideDown("slow","linear");         
   }); 
 });

	$("#index-button-2").click(function(){
    $("#index-top").animate({
    	height:"30%"}, 500);
});

	$(document).ready(function(){
  $(".about-title").click(function(){
    $("#description-about").toggle();
    $("#description-con").toggle();
  });
});

	$(document).ready(function(){
  $("#index-logo-container").click(function(){
  	$("#index-content").hide();
    $("#content-desktop").show();
  });
});	

	$(document).ready(function(){
  $(".contr-title").click(function(){
  	$("#description-about").toggle();
    $("#description-con").toggle();
  });
});

	$(document).ready(function(){
  $(".interviews-title").click(function(){
  	$("#description-interviews").toggle();
  	$("#description-playlists").toggle();
  });
});	

	$(document).ready(function(){
  $(".sounds-title").click(function(){
  	$("#description-playlists").toggle();
  	$("#description-interviews").toggle();
  });
});

	$(document).ready(function(){
  $(".texts-title").click(function(){
    $("#description-texts").toggle();
    $("#").toggle();
  });
});

	
















