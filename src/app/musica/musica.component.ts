import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UppercaseFirstPipe } from '../pipes/uppercase-first.pipe';

@Component({
  selector: 'app-musica',
  standalone: true,
  imports: [RouterLink, CommonModule, UppercaseFirstPipe],
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent {
  // Datos de las canciones
  canciones = [
    { 
      titulo: 'closer', 
      artista: 'the chainsmokers ft. halsey',
      audio: 'assets/musica/closer.mpeg',
      favorita: true
    },
    { 
      titulo: 'fin del mundo', 
      artista: 'artista desconocido',
      audio: 'assets/musica/fin-del-mundo.mpeg',
      favorita: true
    },
    { 
      titulo: 'hidden love', 
      artista: 'ost drama',
      audio: 'assets/musica/hidden-love.mp4',
      favorita: false
    },
    { 
      titulo: 'hyouka', 
      artista: 'anime ost',
      audio: 'assets/musica/hyouka.mpeg',
      favorita: true
    },
    { 
      titulo: 'la melodía', 
      artista: 'artista',
      audio: 'assets/musica/melodia.mp4',
      favorita: false
    }
  ];

  // Estado del filtro
  mostrarSoloFavoritas = false;

  // Método para filtrar canciones
  get cancionesFiltradas() {
    if (this.mostrarSoloFavoritas) {
      return this.canciones.filter(c => c.favorita);
    }
    return this.canciones;
  }

  // Toggle filtro de favoritas
  toggleFavoritas() {
    this.mostrarSoloFavoritas = !this.mostrarSoloFavoritas;
  }

  // Toggle favorita individual
  toggleFavorita(cancion: any) {
    cancion.favorita = !cancion.favorita;
  }
}