import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyAppComponents } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

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

  getAlbums() {
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getSuperHeros() {
    return this.httpClient.get<any[]>('/assets/data/superheroes.json')
      .pipe( delay(2000) );
  }
}
