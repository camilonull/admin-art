import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ExampleStyleService } from '../../services/example-style.service';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrl: './suggestion.component.css'
})
export class SuggestionComponent {

  constructor(private router: Router, private dataService: DataService, private example: ExampleStyleService) { }

  redirectToLink(title: string) {
    
    this.dataService.setData(this.example.getList());
    this.dataService.setTitle(title);
    this.router.navigateByUrl('/co-su');
  }

}
