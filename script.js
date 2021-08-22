// random display 
const bg = document.querySelector('.bg');
const field = document.querySelector('.field');
const timer = document.querySelector('.timer');

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const play = document.querySelector('.play');
play.addEventListener('click',()=>{
  random_display();
  countdown(10);
});

function random_display() {
  field.innerHTML = "";
  item_display("bug", 50, 50, 10);
  item_display("carrot", 80, 80, 10);

}
function item_display(type, width, height, number) {
  for( i=0;i<number;i++) {
    const bgd = bg.getBoundingClientRect();
    const left = bgd.left;
    const right = bgd.right - width;
    const topp = bgd.top + 220;
    const bottom = bgd.bottom - height;
    //console.log(left, right, topp , bottom);
    const x = getRandomArbitrary(left, right);
    const y = getRandomArbitrary(topp, bottom);
    const img = document.createElement('img');
    img.src = `img/`+type+`.png`;
    img.setAttribute('class', type);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    field.appendChild(img);
  }
}

function countdown(seconds) {
  let mycountdown = setInterval(function(){
    timer.textContent = `00:${seconds}`;
    console.log(seconds);
    seconds--;
    if (seconds < 0) clearInterval(mycountdown);
  },1000);
}
