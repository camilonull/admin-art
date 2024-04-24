import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrl: './list-suggestion.component.css'
})
export class ListSuggestionComponent implements OnInit {

  title: string = "Error"
  list:any[] = [];
  constructor (private dataService: DataService, private titleService: Title){

  }

  currentIndex = 0;
  currentItem = this.list[this.currentIndex];

  mostrarSiguienteItem() {
    if (this.currentIndex < this.list.length - 1) {
      this.currentIndex++;
      this.currentItem = this.list[this.currentIndex];
    } else {
      console.log('No hay más elementos para mostrar');
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.dataService.getTitle());
    this.title = this.dataService.getTitle();
    this.list = this.dataService.getData();
    this.currentItem = this.list[this.currentIndex];
  }



}
