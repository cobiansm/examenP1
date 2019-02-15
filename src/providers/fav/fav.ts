import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the FavProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavProvider {
favoritos = [];

  constructor(public toastCtrl: ToastController) {
    console.log('Hello FavProvider Provider');
  }

  remove(mascota) {
    let index = this.favoritos.findIndex(item => {
      return item.ad.subject == mascota.ad.subject && 
      item.ad.user.account.name == mascota.ad.user.account.name;
    });
    if (index > -1) {
      this.favoritos.splice(index, 1);
      const toast = this.toastCtrl.create({
        message: 'Mascota eliminada de favoritos',
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }

  existe(mascota) {
    return this.favoritos.some(item => {
      return item.ad.subject == mascota.ad.subject && 
      item.ad.user.account.name == mascota.ad.user.account.name;
    })
  }

  addFavoritos(mascota) {
    this.favoritos.push(mascota);

    const toast = this.toastCtrl.create({
      message: 'Esta mascota se agregó a favoritos',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  getFavoritos() {
    return this.favoritos;
  }

}
