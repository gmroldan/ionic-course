import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  components: MyAppComponents[] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'appstore',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      name: 'Buttons and Routers',
      redirectTo: '/buttons'
    }
    ,
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/cards'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface MyAppComponents {
  icon: string;
  name: string;
  redirectTo: string;
}