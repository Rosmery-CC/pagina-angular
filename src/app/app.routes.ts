import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ComidaComponent } from './comida/comida.component';
import { FotosComponent } from './fotos/fotos.component';
import { HorarioComponent } from './horario/horario.component';
import { JuegosComponent } from './juegos/juegos.component';
import { MusicaComponent } from './musica/musica.component';
import { T1Component } from './t1/t1.component';


export const routes: Routes = [
    {path:' ', component :InicioComponent},
    {path:'comida',component:ComidaComponent},
    {path:'fotos' ,component:FotosComponent},
    {path:'horario' ,component:HorarioComponent},
    {path:'juegos', component:JuegosComponent},
    {path:'musica' , component:MusicaComponent},
    {path:'t1',component:T1Component},
    {path: '**', redirectTo: ' '}
];
