import { Component } from '@angular/core';
import { NewsPage } from '../news/news.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public nav: NavController) {
  }

  goNews() {
    this.nav.navigateForward('/news');
  }
}
