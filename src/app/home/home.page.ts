
import { Component } from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public modalController: ModalController) {}

  itemCart = {
    samosa: 0,
    maggi: 0,
    vp: 0,
    pp: 0,
    vs: 0
  };

  addItem = (item) => {
    this.itemCart[item]++;
  }

  removeItem = (item) => {
    if (!this.itemCart[item]) { return; }
    this.itemCart[item]--;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

}
