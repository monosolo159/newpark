import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { NotificationPage } from './../pages/notification/notification';
import { CarPage } from './../pages/car/car';
import { ProfilePage } from './../pages/profile/profile';
import { NewsPage } from './../pages/news/news';
import { NewsDetailPage } from './../pages/news-detail/news-detail';
import { EmergencyPage } from './../pages/emergency/emergency';
import { LoginPage } from '../pages/login/login';
import { CarServicePage } from '../pages/car-service/car-service';
import { RegisterPage } from '../pages/register/register';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { EditPasswordPage } from '../pages/edit-password/edit-password';
import { CarAddPage } from '../pages/car-add/car-add';
import { CarDetailPage } from '../pages/car-detail/car-detail';
import { NotificationAddPage } from '../pages/notification-add/notification-add';
import { NotificationCorrectPage } from '../pages/notification-correct/notification-correct';
import { Server } from '../providers/server';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { ProfileSettingPage } from '../pages/profile-setting/profile-setting';
import { TabsPage } from '../pages/tabs/tabs';

import { MomentModule } from 'angular2-moment';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Crop } from '@ionic-native/crop';
import { OneSignal } from '@ionic-native/onesignal';
// import { HTTP } from '@ionic-native/http';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    NotificationPage,
    CarPage,
    ProfilePage,
    NewsPage,
    NewsDetailPage,
    EmergencyPage,
    LoginPage,
    CarServicePage,
    RegisterPage,
    ForgotPasswordPage,
    EditPasswordPage,
    CarAddPage,
    CarDetailPage,
    NotificationAddPage,
    NotificationCorrectPage,
    ProfileEditPage,
    ProfileSettingPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    MomentModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NotificationPage,
    CarPage,
    ProfilePage,
    NewsPage,
    NewsDetailPage,
    EmergencyPage,
    LoginPage,
    CarServicePage,
    RegisterPage,
    ForgotPasswordPage,
    EditPasswordPage,
    CarAddPage,
    CarDetailPage,
    NotificationAddPage,
    NotificationCorrectPage,
    ProfileEditPage,
    ProfileSettingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Server,
    Vibration,
    Camera,
    File,
    FileTransfer,
    Crop,
    OneSignal,
    // HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
