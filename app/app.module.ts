import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: "AIzaSyDqyYzteKn-h7VT3AlWSgKKoDlUeuYIGO4",
  authDomain: "scoresave-6809.firebaseapp.com",
  databaseURL: "https://scoresave-6809.firebaseio.com",
  projectId: "scoresave-6809",
  storageBucket: "scoresave-6809.appspot.com",
  messagingSenderId: "2450675775",
  appId: "1:2450675775:web:6687f3833e7cd149c7c08a"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,

    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    AngularFireModule.initializeApp(firebaseConfig),
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
