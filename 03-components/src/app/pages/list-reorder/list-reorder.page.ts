import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  superHeros = ['Aquaman', 'Wonder Woman', 'Flash', 'Batman', 'Superman'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    console.log(event);

    const itemToMove = this.superHeros.splice(event.detail.from, 1) [0];
    this.superHeros.splice(event.detail.to, 0, itemToMove);

    event.detail.complete();
  }

  onClick() {
    console.log(this.superHeros);
  }

}
