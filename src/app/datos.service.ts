import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }

  // Método que provee datos de habilidades
  obtenerHabilidades() {
    return [
      {
        nombre: 'HTML & CSS',
        nivel: 'En aprendisaje =)',
        descripcion: 'Diseño y estructura de páginas web',
        icono: '🎨'
      },
      {
        nombre: 'JavaScript',
        nivel: 'bajito',
        descripcion: 'Programación dinámica en el navegador',
        icono: '⚡'
      },
      {
        nombre: 'Angular',
        nivel: 'Bajito',
        descripcion: 'Framework para aplicaciones web',
        icono: '🅰️'
      },
      {
        nombre: 'Git & GitHub',
        nivel: 'Bajito',
        descripcion: 'Control de versiones y colaboración',
        icono: '📦'
      }
    ];
  } 
}