import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-inicio',
  standalone:true,
  imports:[
    CommonModule,
    AsideComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    NavComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  // Propiedades para los datos del servicio
  habilidades: any[] = [];
  infoPersonal: any = {};

  // Inyectamos el servicio
  constructor(private datosService: DatosService) { }

  ngOnInit() {
    // Obtenemos los datos del servicio
    this.habilidades = this.datosService.obtenerHabilidades();
  
  }

}
