// element
const bg = document.querySelector('.bg');
const field = document.querySelector('.field');
const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');
let popup = document.querySelector('.popup');
let popup_text = document.querySelector('.popup_text');
const play = document.querySelector('.play');
const redo = document.querySelector('.redo');
const icon = document.querySelector('.fa-play');

// default display
let count_number = 10;
let mycountdown;
let started = false;
timer.textContent = `00:10`;
counter.textContent = `10`;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

play.addEventListener('click', ()=>{
  if(started) {
    stopGame();
  }else {
    startGame();
  }
  started = !started;
})
function startGame() {
  random_display();
  start_timer(10);
  btn_change();
}
function stopGame() {
  clearInterval(mycountdown);
  timer.textContent = `00:10`;

  counter.textContent = `10`;
  field.innerHTML = "";
  icon.classList.add('fa-play');
  icon.classList.remove('fa-stop');
}
redo.addEventListener('click',()=>{
  stopGame();
  started = !started;
  popup.classList.remove('show');
})
function btn_change() {
  icon.classList.add('fa-stop');
  icon.classList.remove('fa-play');
}
field.addEventListener('click', (e)=>{
    item_clicked(e);
});

function random_display() {   
  field.innerHTML = "";
  item_display("bug", 50, 50, 10);
  item_display("carrot", 80, 80, 10);
}

let k = 0; // for data-id
function item_display(type, width, height, number) {
  for( i=0;i<number;i++) {
    const bgd = bg.getBoundingClientRect();
    const left = bgd.left;
    const right = bgd.right - width;
    const topp = bgd.top + window.scrollY + 220;
    const bottom = bgd.bottom + window.scrollY - height ;
    //console.log(window.scrollY);
    //console.log(left, right, topp , bottom);
    const x = getRandomArbitrary(left, right);
    const y = getRandomArbitrary(topp, bottom);
    const img = document.createElement('img');
    img.src = `img/`+type+`.png`;
    img.setAttribute('class', type);
    img.setAttribute('data-id', k);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    field.appendChild(img);
    k++;
  }
}

function start_timer(seconds) {
 mycountdown = setInterval(function(){
    timer.textContent = `00:${seconds}`;
      seconds--;
      //console.log(count_number);
      if (seconds < 0) {
        clearInterval(mycountdown);
        show_popup("YOU LOST!");

      }
  },1000);
}
function removeclasslist() {
  popup.classList.remove('show');
}

function item_clicked(e) {
  const classname = e.target.className;
  const n_k = e.target.dataset.id;
  if(classname == "field") {
    return;
  } else if(classname == "carrot") {
    document.querySelector(`.carrot[data-id="${n_k}"]`).remove();
    count_carrot();
    if(count_number == 0) {
      clearInterval(mycountdown);
      show_popup("YOU WON!");
    }
  } else if(classname == "bug") {
    clearInterval(mycountdown)
    show_popup("YOU LOST!");
  }
}
function show_popup(text) {
  popup_text.textContent = text;
  popup.classList.add('show');
}
function count_carrot() {
  count_number --;
  counter.textContent = `${count_number}`;
}