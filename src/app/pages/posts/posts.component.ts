import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  myMessages: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.myMessages = this.dataService.getPosts();
  }

  listenClick( id ) {
    console.log('Click on: ', id);
  }

}
