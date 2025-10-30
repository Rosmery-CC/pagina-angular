import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-t1',
  standalone:true,
  imports:[RouterLink],
  templateUrl: './t1.component.html',
  styleUrls: ['./t1.component.css']
})
export class T1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
