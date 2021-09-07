import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string;
  start: boolean = false;
  profiel: string;


constructor(){
  this.title='Axel Colson'
}

scroll(el: HTMLElement) {
  console.log("clicked");
  el.scrollIntoView({
    behavior: 'smooth'
  });
}

typingCallback(that) {
  let total_length = that.typewriter_text.length;
  let current_length = that.typewriter_display.length;
  if (current_length < total_length) {

    that.typewriter_display += that.typewriter_text[current_length];
    setTimeout(that.typingCallback, 100, that);
  } 
}

ngOnInit () {
  this.typingCallback(this);
}

}
