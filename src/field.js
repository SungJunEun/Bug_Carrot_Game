'use strict';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

export default class Field {
  constructor() {
    this.field = document.querySelector('.field');
    this.bg = document.querySelector('.bg');
    this.field.addEventListener('click', (e)=>{
    this.onClick(e);
});
  }
  setClickEvent(onClick) {
    this.onClick = onClick;
  }  
  empty() {
    this.field.innerHTML = "";
  }
  append(element){
    this.field.appendChild(element);
  }
  random_display() {   
  this.empty();
  this._item_display("bug", 50, 50, 10);
  this._item_display("carrot", 80, 80, 10);
}

  _item_display(type, width, height, number) {
    for( let i=0;i<number;i++) {
      this.bgd = this.bg.getBoundingClientRect();
      this.left = this.bgd.left;
      this.right = this.bgd.right - width;
      this.topp = this.bgd.top + window.scrollY + 220;
      this.bottom = this.bgd.bottom + window.scrollY - height ;
      //console.log(window.scrollY);
      //console.log(left, right, topp , bottom);
      this.x = getRandomArbitrary(this.left, this.right);
      this.y = getRandomArbitrary(this.topp, this.bottom);
      this.img = document.createElement('img');
      this.img.src = `img/`+type+`.png`;
      this.img.setAttribute('class', type);
      this.img.style.left = `${this.x}px`;
      this.img.style.top = `${this.y}px`;
      this.append(this.img);
    }
}
}