import { Component, ViewChild } from '@angular/core';
import { App, Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { Server } from '../providers/server';
import { Http } from '@angular/http';

import 'rxjs/add/observable/fromEvent';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any;
  public data_table_province: Array<{}>;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public _OneSignal: OneSignal,  public alertCtrl: AlertController, public storage: Storage, public app: App, public http: Http, public server: Server) {

    storage.get('user_data').then((val) => {
      if (val == null) {
        this.rootPage = LoginPage;
      } else {
        this.rootPage = TabsPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.platform.registerBackButtonAction(() => {
        // navigator['app'].exitApp();
        this.exit();
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  exit() {
    let alert = this.alertCtrl.create({
      // title: 'Confirm',
      message: 'ออกจากแอพ',
      buttons: [{
        text: "ออก",
        handler: () => { this.exitApp() }
      }, {
          text: "ยกเลิก",
          role: 'cancel'
        }]
    })
    alert.present();
  }
  exitApp() {
    this.platform.exitApp();
  }


  initializeApp() {
    // this.platform.ready().then(() => {

    this._OneSignal.startInit('6ac42896-75e0-44a6-800e-18ace3d1ffde', '141918096663');
    // this._OneSignal.inFocusDisplaying(this._OneSignal.OSInFocusDisplayOption.InAppAlert);
    this._OneSignal.inFocusDisplaying(this._OneSignal.OSInFocusDisplayOption.InAppAlert);
    this._OneSignal.enableVibrate(true);
    this._OneSignal.enableSound(true);
    this._OneSignal.setSubscription(true);
    this._OneSignal.getIds()
      .then((ids) => {
        // this.deviceId = JSON.stringify(ids);
        console.log('getIds: ' + JSON.stringify(ids));
      });
    this._OneSignal.handleNotificationReceived().subscribe(() => {
      // handle received here how you wish.
      this.server.notiVibration([5000, 2000, 5000, 2000, 5000, 2000, 5000, 2000, 5000, 2000, 5000]);
    });
    this._OneSignal.handleNotificationOpened().subscribe(() => {
      // handle opened here how you wish.
      // Vibration.vibrate([0, 0, 0, 0, 0]);
    });
    this._OneSignal.endInit();
    // })
  }

}
