import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MascotapagePage } from '../mascotapage/mascotapage';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
mascotas = [];
items = [];
mascotaPage = MascotapagePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mascotas = this.navParams.get('mascotas');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev){
    console.log(ev.target.value);
    this.items = this.mascotas.filter(mascota => {
      return mascota.ad.subject.toLowerCase().includes( ev.target.value.toLowerCase())
    });
  }

  verMascota(mascota) {
    this.navCtrl.push(this.mascotaPage, {mascota: mascota});
  }

}
