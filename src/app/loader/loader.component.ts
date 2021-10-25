import { Component, OnInit } from '@angular/core';
import { LoadService } from '../load.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  isLoading: any;
  constructor(private loadService: LoadService) { }

  ngOnInit(): void {
    this.isLoading = this.loadService.getIsLoading();
    
  }
  }
  
