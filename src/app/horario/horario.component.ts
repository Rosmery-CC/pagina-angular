import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-horario',
  standalone:true,
  imports:[RouterLink],
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
