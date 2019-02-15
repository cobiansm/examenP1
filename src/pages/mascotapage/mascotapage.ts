import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';

/**
 * Generated class for the MascotapagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mascotapage',
  templateUrl: 'mascotapage.html',
})
export class MascotapagePage {
mascota = {};
imgs = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public fav: FavProvider) {
      this.mascota = this.navParams.get('mascota');
      if (this.mascota.ad.hasOwnProperty('images')) {
        this.imgs = this.mascota.ad.images;
      } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MascotapagePage');
  }

  favoritos(mascota) {
    this.fav.addFavoritos(mascota);
  }

}
