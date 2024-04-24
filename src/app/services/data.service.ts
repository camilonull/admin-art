import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  title: string = "";

  constructor() { }

  setData(data: any) {
    this.data = data;
    localStorage.setItem('data', JSON.stringify(data));
  }

  getData() {
   
    return JSON.parse(localStorage.getItem('data') || '{}');;    
  }

  setTitle(title: string) {
    localStorage.setItem('title', title);
    this.title = title;
  }

  getTitle() {
    return localStorage.getItem('title') || '';
  }
}
