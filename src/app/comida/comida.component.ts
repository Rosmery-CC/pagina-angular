import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comida',
  standalone:true,
  imports:[RouterLink],
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
