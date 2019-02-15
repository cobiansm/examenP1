import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { MascotapagePage } from '../mascotapage/mascotapage';
import { SearchPage } from '../search/search';
import { FavProvider } from '../../providers/fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
mascotas =[];
mascotapage = MascotapagePage;
search = SearchPage;
fav = FavProvider;
favoritos = [];

  constructor(public navCtrl: NavController,
    public http: HttpClient) {

      this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
      .subscribe(data => {
        //console.log(JSON.stringify(data));
        if (data.hasOwnProperty('list_ads')) {
          this.mascotas = data['list_ads'];
        }
      }, error => {
        console.log(JSON.stringify(error));
      });
  }

verMascota(mascota) {
  this.navCtrl.push(this.mascotapage, {mascota: mascota});
}

buscar() {
  this.navCtrl.push(this.search, {mascotas: this.mascotas});
}

favs() {
  this.navCtrl.push(this.fav, {favoritos = favoritos})
}

}


