let count = 0
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
    if (count < 10){
        key.style.transform += "translateY(10px)"
        count++
    }
    else {
        key.style.transform = "translateY(0px)"
        count = 0
    }
}

// function moveKeys(e) {
//     if (count < 10){
//         this.classList.add('move');
//         count++
//     }
//     else {
//         this.classList.remove('move');
//         count = 0
//     }
// }

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
//window.addEventListener('keydown', moveKeys);

