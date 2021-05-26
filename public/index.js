const sounds = ["among us",
"toast bread butter jam",
"toast big iq", "up and down",
"who's impostor"]


sounds.forEach(sound => {
    const btns = document.createElement('button')
    btns.classList.add('btn', 'btn-dark', 'me-3', 'mb-3')
    
    btns.innerHTML = sound;

    btns.addEventListener('click', () => {
        document.getElementById(sound).play()
    })


    document.getElementById('buttons').appendChild(btns)
})