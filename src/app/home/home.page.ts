import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

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

}
