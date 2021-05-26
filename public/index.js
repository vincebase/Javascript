const sounds = ["among us",
                "toast big iq", 
                "toast bread butter jam",
                "up and down",
                "who's impostor"]


sounds.forEach(sound => {
    const btns = document.createElement('button')
    btns.classList.add('btn', 'btn-dark', 'me-3', 'mb-3')
    
    btns.innerHTML = sound;

    btns.addEventListener('click', () => {
        pauseMusic()
        document.getElementById(sound).play()
    })


    document.getElementById('buttons').appendChild(btns)
})

function pauseMusic(){
    sounds.forEach(sound => {
        const music = document.getElementById(sound)
        
        music.pause()
        music.currentTime = 0;
    });
} 