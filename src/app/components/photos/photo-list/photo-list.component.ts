import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo [] = [];
  
  constructor(
    private photoService: PhotoService,
    private activateRoute: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.photoService
    .listFromUser(this.activateRoute.snapshot.params.userName)
    .subscribe(
      response => this.photos = response,
      err => console.log(err.message)
    );
  }

}
