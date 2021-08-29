'use strict';
export default class PopUp {
  constructor() {
    this.popup = document.querySelector('.popup');
    this.popup_text = document.querySelector('.popup_text');
    this.popup_redo = document.querySelector('.redo');
    this.popup_redo.addEventListener('click',()=>{
      this.onClick();
      this.hide();
    })
  }
  setClickEvent(onClick) {
    this.onClick = onClick;
  }
  hide() {
    this.popup.classList.remove('show');
  }
  show(text) {
    this.popup_text.textContent = text;
    this.popup.classList.add('show');
  }
}
