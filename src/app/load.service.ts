import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadService {
  private isLoadingBehaviour = new BehaviorSubject(true);
  

  constructor() {}

  getIsLoading() {
    return this.isLoadingBehaviour;
    
  }

  setIsLoading(newValue) {
    this.isLoadingBehaviour.next(newValue);
  }
}
