import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../models/photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  photos: Photo [] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  
  constructor(private activateRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.photos = this.activateRoute.snapshot.data['photos'];
    
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }
    
  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
    
    
}
