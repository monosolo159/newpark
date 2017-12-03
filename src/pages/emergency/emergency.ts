import { Component } from '@angular/core';
import { NavController, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { Server } from '../../providers/server';

@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
  providers: [Server]
})
export class EmergencyPage {
  public data_table: Array<{}>;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public loadingCtrl: LoadingController, public http: HTTP, public alertCtrl: AlertController, public server: Server) {
    // this.load_allEmergency();
  }

  ionViewWillEnter() {
    this.load_allEmergency();
  }

  load_allEmergency() {
    // url ฝั่ง server ที่ดึงข้อมูลจาก mysql
    var link = this.server.linkServer() + "emergency_service/emergencylist/format/json";

    // var link = "http://localhost/parking/promotion.php";

    var send_data = {};

    //เชื่อต่อกับ mysql server โดยส่งข้อมูลแบบ post
    // this.http.get(link, send_data)
    //   .subscribe(response => {
    //
    //     // loading_popup.dismiss();//เมื่อโหลดเสร็จแล้วให้ปิด popup
    //     // นำข้อมูลจาก mysql มาแสดงในตัวเลือกของ select controller
    //     this.data_table = JSON.parse(response["_body"]);
    //
    //   }, error => {
    //
    //   });

      this.http.post(link, send_data, {})
      .then(data => {
        this.data_table = JSON.parse(data.data["_body"]);
        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });
  }


}
