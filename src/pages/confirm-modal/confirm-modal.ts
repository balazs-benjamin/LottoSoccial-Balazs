import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-confirm-modal',
  templateUrl: 'confirm-modal.html'
})
export class ConfirmModalPage {
  deviceHeight: any;
  topmar: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public app: App) {}

  ionViewDidLoad() {
    this.deviceHeight = window.screen.height;
    this.topmar = (this.deviceHeight/2) - 150;
    console.log('ionViewDidLoad LeavePage',this.deviceHeight, this.topmar );
  }

  dismissm() {
    let data = {'foo':'bar'}
    this.viewCtrl.dismiss(data);
 }
 nothanks() {
   this.viewCtrl.dismiss();
   //this.navCtrl.push(TabsPage);
   //this.app.getRootNav().push(TabsPage); 
   this.navCtrl.setRoot(TabsPage, {tabIndex: 1})
   //let option = [{tabIndex: 1}]
   //this.navCtrl.popToRoot()
   //this.navCtrl.setRoot(TabsPage, {tabIndex: 1});
 }
 find() {
   
 }

}
