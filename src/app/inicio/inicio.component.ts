import { Component, OnInit } from '@angular/core';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-inicio',
  standalone:true,
  imports:[AsideComponent,
          FooterComponent,
          HeaderComponent,
          MainComponent,
          NavComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
