import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';
import { MascotapagePage } from '../mascotapage/mascotapage';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
items = [];
mascotapage = MascotapagePage

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public fav: FavProvider) {
      this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }

  verMascota(mascota) {
    this.navCtrl.push(this.mascotapage, {mascota: mascota});
  }

}
