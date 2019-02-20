import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { MascotapagePage } from '../pages/mascotapage/mascotapage';
import { VideojuegosPage } from '../pages/videojuegos/videojuegos';
import { EmpleoPage } from '../pages/empleo/empleo';
import { TabsPage } from '../pages/tabs/tabs';
import { VerEmpleoPage } from '../pages/ver-empleo/ver-empleo';
import { MostrarVideojuegoPage } from '../pages/mostrar-videojuego/mostrar-videojuego';
import { SearchPage } from '../pages/search/search';
import { FavProvider } from '../providers/fav/fav';
import { FavoritosPage } from '../pages/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MascotapagePage,
    VideojuegosPage,
    EmpleoPage,
    TabsPage,
    VerEmpleoPage,
    MostrarVideojuegoPage,
    SearchPage,
    FavoritosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MascotapagePage,
    EmpleoPage,
    VideojuegosPage,
    TabsPage,
    VerEmpleoPage,
    MostrarVideojuegoPage,
    SearchPage,
    FavoritosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavProvider
  ]
})
export class AppModule {}
