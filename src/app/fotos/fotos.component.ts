import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fotos',
  standalone:true,
  imports:[RouterLink],
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
