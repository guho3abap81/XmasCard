const card = document.querySelector(".card");
const audio1 = new Audio("we-wish-you-a-merry-christmas.mp3")
const audio2 = new Audio("jingle-bells.mp3")
let openCard = false;
card.addEventListener("click",open)

function open(){
  card.classList.toggle("active")
  openCard = !openCard
  if(openCard){
    audio1.play();
  }else{
    audio1.pause();
    audio1.currentTime = 0;
  }

}
