let playing = document.querySelector('.playing');
let join_art = document.querySelector('.join-art');
let join_name = document.querySelector('.join-name');
let join_artist = document.querySelector('.join-artist');


let playpause_btn = document.querySelector('.playpause-join');
let next_btn = document.querySelector('.next-join');
let prev_btn = document.querySelector('.prev-join');


let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_join = document.createElement('audio');


let join_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list=[

  
      {
        img:'imagem/gato.jpg',
        name:'Cat walk',
        artist:'Tom',
        music:'musica/mixkit-cat-walk-371.mp3'
      },
      {
        img:'imagem/hiphop.jpg',
        name:'Hip-hop',
        artist:'Descohecido',
        music:'musica/mixkit-hip-hop-02-738.mp3'
      },
      {
        img:'imagem/arlivre.jpg',
        name:'Raising me',
        artist:'Turma',
        music:'musica/mixkit-raising-me-higher-34.mp3'
      },
      {
        img:'imagem/producao.jpg',
        name:'Tech house',
        artist:'Tom',
        music:'musica/mixkit-tech-house-vibes-130.mp3'
      },
    

];
  

loadJoin(join_index);

function loadJoin(join_index){
    clearInterval(updateTimer);
    reset();

    curr_join.src = music_list[join_index].music;
    curr_join.load();

    join_art.style.backgroundImage = "url(" + music_list[join_index].img + ")";
    join_name.textContent = music_list[join_index].name;
    join_artist.textContent = music_list[join_index].artist;
    playing.textContent = "Playing music " + (join_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_join.addEventListener('ended', nextJoin);
    random_bg_color();
}

function random_bg_color(){
  let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  let a;

  function populate(a){
      for(let i=0; i<6; i++){
          let x = Math.round(Math.random() * 14);
          let y = hex[x];
          a += y;
      }
      return a;
  }
  let Color1 = populate('#');
  let Color2 = populate('#');
  var angle = 'to right';

  let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
  document.body.style.background = gradient;
}

function reset(){
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

function randomJoin(){
  isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
  isRandom = true;
  randomIcon.classList.add('randomActive');
}
function pauseRandom(){
  isRandom = false;
  randomIcon.classList.remove('randomActive');
}
function repeatJoin(){
  let current_index = join_index;
  loadJoin(current_index);
  playJoin();
}

function playpauseJoin(){
  isPlaying ? pauseJoin() : playJoin();
}

function playJoin(){
  curr_join.play();
  isPlaying = true;
  join_art.classList.add('rotate');
  wave.classList.add('loader');
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseJoin(){
  curr_join.pause();
  isPlaying = false;
  join_art.classList.remove('rotate');
  wave.classList.remove('loader');
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
  
}

function nextJoin(){
    if(join_index < music_list.length - 1 && isRandom === false){
        join_index += 1;
    }else if(join_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        join_index = random_index;
    }

else{
        join_index = 0;
    }
    loadJoin(join_index);
    playJoin();
}


function prevJoin(){
    if(join_index > 0){
        join_index -= 1;
    }else{
        join_index = music_list.length -1;
    }
    loadJoin(join_index);
    playJoin();
}

function seekTo(){
    let seekto = curr_join.duration * (seek_slider.value / 100);
    curr_join.currentTime = seekto;
}

function setVolume(){
    curr_join.volume = volume_slider.value / 100;
}

function setUpdate(){

    let seekPosition = 0;
    if(!isNaN(curr_join.duration)){
        seekPosition = curr_join.currentTime * (100 / curr_join.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_join.currentTime / 60);
        let currentSeconds = Math.floor(curr_join.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_join.duration / 60);
        let durationSeconds = Math.floor(curr_join.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}




     