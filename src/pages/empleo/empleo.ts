import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { VerEmpleoPage } from '../ver-empleo/ver-empleo';
import { SearchPage } from '../search/search';
import { FavoritosPage } from '../favoritos/favoritos';

/**
 * Generated class for the EmpleoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empleo',
  templateUrl: 'empleo.html',
})
export class EmpleoPage {
  empleos = [];
  empleopage = EmpleoPage;
  verempleo = VerEmpleoPage;
  search = SearchPage;
  fav = FavoritosPage;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public http: HttpClient) {
      
      this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
      .subscribe(data => {
        //console.log(JSON.stringify(data));
         if (data.hasOwnProperty('list_ads')) {
           this.empleos = data['list_ads'];
         }
    }, error => {
        console.log(JSON.stringify(error));
    });
  
  
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpleoPage');
  }

  verEmpleo(empleo) {
    this.navCtrl.push(this.verempleo, {empleo: empleo})
  }

  buscar() {
    this.navCtrl.push(this.search, {mascotas: this.empleos});
  }
  
  favoritos() {
    this.navCtrl.push(this.fav, {mascotas: this.empleos});
  }

}

