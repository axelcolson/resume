import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private typewriter_text: string = "Axel Colson, Software Developer.";
  private typewriter_display: string = "";

  constructor() { }

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
