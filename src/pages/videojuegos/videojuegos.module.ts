import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideojuegosPage } from './videojuegos';

@NgModule({
  declarations: [
    VideojuegosPage,
  ],
  imports: [
    IonicPageModule.forChild(VideojuegosPage),
  ],
})
export class VideojuegosPageModule {}
