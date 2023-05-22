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
let curr_track = document.createElement('audio');


let join_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list=[

    {
        img:'imagem/gato.png',
        name:'Cat walk',
        artist:'Tom',
        music:'musica/mixkit-cat-walk-371'
      },
    
      {
        img:'imagem/gato.png',
        name:'Cat walk',
        artist:'Tom',
        music:'musica/mixkit-cat-walk-371'
      },
    
      {
        img:'imagem/hiphop.png',
        name:'Hip-hop',
        artist:'Descohecido',
        music:'musica/mixkit-hip-hop-02-738'
      },

      {
        img:'imagem/arlivre.png',
        name:'Raising me',
        artist:'Turma',
        music:'musica/mixkit-raising-me-higher'
      },
    
      {
        img:'imagem/producao.png',
        name:'Tech house',
        artist:'Tom',
        music:'musica/mixkit-tech-house-vibes-130'
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


  






