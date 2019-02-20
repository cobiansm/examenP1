import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavProvider } from '../../providers/fav/fav';

/**
 * Generated class for the VerEmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-empleo',
  templateUrl: 'ver-empleo.html',
})
export class VerEmpleoPage {
empleo = {};


  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavProvider) {
    this.empleo = this.navParams.get('empleo');
    if (this.empleo.ad.hasOwnProperty('images')) {
      this.imgs = this.empleo.ad.images;
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerEmpleoPage');
  }
  
  favoritos(mascota) {
    this.fav.addFavoritos(mascota);
  }

}
