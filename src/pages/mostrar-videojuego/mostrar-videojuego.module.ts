import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostrarVideojuegoPage } from './mostrar-videojuego';

@NgModule({
  declarations: [
    MostrarVideojuegoPage,
  ],
  imports: [
    IonicPageModule.forChild(MostrarVideojuegoPage),
  ],
})
export class MostrarVideojuegoPageModule {}
