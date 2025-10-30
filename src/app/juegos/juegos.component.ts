import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juegos',
  standalone:true,
  imports:[RouterLink],
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
