import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MyAppComponents } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  components: Observable<MyAppComponents[]>;

  constructor(private menuController: MenuController,
              private dataService: DataService) { }

  ngOnInit() {
    this.components = this.dataService.getMenuOptions();
  }

  toggleMenu() {
    this.menuController.toggle();
  }

}