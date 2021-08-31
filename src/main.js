'use strict';
import PopUp from './popup.js';
import Field from './field.js';

// element
const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');
const play = document.querySelector('.play');
const icon = document.querySelector('.fa-play');
const FinishGameBanner = new PopUp();
const FarmField = new Field();



// default display
let count_number = 10;
let mycountdown;
let started = false;
timer.textContent = `00:10`;
counter.textContent = `10`;



play.addEventListener('click', ()=>{
  if(started) {
    stopGame();
  }else {
    startGame();
  }
})
function startGame() {
  count_number = 10;
  started = !started;
  FarmField.random_display();
  start_timer(10);
  btn_change();
  FinishGameBanner.hide();
}
function stopGame() {
  started = !started;
  clearInterval(mycountdown);
  timer.textContent = `00:10`;
  FinishGameBanner.hide();
  counter.textContent = `10`;
  FarmField.empty();
  icon.classList.add('fa-play');
  icon.classList.remove('fa-stop');
}

FinishGameBanner.setClickEvent(stopGame);
FarmField.setClickEvent(item_clicked);

function btn_change() {
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}

function item_clicked(e) {
  const classname = e.target.className;
  const n_k = e.target.dataset.id;
  if(classname == "field") {
    return;
  } else if(classname == "carrot") {
    e.target.remove();
    count_carrot();
    if(count_number == 0) {
      clearInterval(mycountdown);
      FinishGameBanner.show("YOU WIN!");
    }
  } else if(classname == "bug") {
    clearInterval(mycountdown);
    FinishGameBanner.show("YOU LOST!");
  }
}

 function start_timer(seconds) {
    mycountdown = setInterval(function(){
    timer.textContent = `00:${seconds}`;
      seconds--;
      //console.log(count_number);
      if (seconds < 0) {
        clearInterval(this.mycountdown);
        FinishGameBanner.show("YOU LOST!");

      }
  },1000);
}
  function count_carrot() {
  count_number --;
  counter.textContent = `${count_number}`;
  }