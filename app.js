window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if(!audio) return; //stop the function running all together
    audio.currentTime = 0; //rewind to the start 
    key.classList.add("playing");
    audio.play()
});

function removeTransition(e){
    if(e.propertyName !== "transform") return; //skip it if its not a transform
    console.log(this);
    this.classList.remove("playing");
}
//getting the key button and put transition end on animation for every key
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

