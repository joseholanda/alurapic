import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo [] = [];
  
  constructor(private photoService: PhotoService) {}
  
  ngOnInit(): void {
    this.photoService
    .listFromUser('flavio')
    .subscribe(
      response => this.photos = response,
      err => console.log(err.message)
    );
  }

}
