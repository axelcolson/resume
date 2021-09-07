import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiel: string;

  constructor() {
    this.profiel = 'In 2020 ben ik aan de Hogeschool PXL afgestudeerd als applicatieontwikkelaar. Na mijn bachelor ben ik begonnen aan een schakeljaar informatica aan de UHasselt, maar omdat ik zelf meer praktisch gericht ben bleek deze master toch niets voor mij te zijn. Daarom ben ik nu op zoek naar een job waarin ik de vaardigheden die ik op school heb geleerd kan inzetten en verder ontwikkelen. Ik ben steeds gemotiveerd om bij te leren en sta altijd open voor de ideeën van collega’s. '
  
   }

  ngOnInit() {
  }

}
