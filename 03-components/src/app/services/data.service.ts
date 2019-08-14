import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAppComponents } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOptions() {
    return this.httpClient.get<MyAppComponents[]>('/assets/data/menu.json');
  }
}