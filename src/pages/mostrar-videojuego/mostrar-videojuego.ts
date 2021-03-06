import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';

/**
 * Generated class for the MostrarVideojuegoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-videojuego',
  templateUrl: 'mostrar-videojuego.html',
})
export class MostrarVideojuegoPage {
videojuego = {};
imgs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavProvider) {
    this.videojuego = this.navParams.get('videojuego');
    if (this.videojuego.ad.hasOwnProperty('images')) {
      this.imgs = this.videojuego.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarVideojuegoPage');
  }

  favoritos(videojuego) {
    this.fav.addFavoritos(videojuego);
  }

}
