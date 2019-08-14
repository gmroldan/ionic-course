import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { MyAppComponents } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuOptions: Observable<MyAppComponents[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.menuOptions = this.dataService.getMenuOptions();
  }

}
