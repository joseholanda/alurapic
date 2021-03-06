import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../models/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  @Input() photos:  Photo[] = [];
  constructor() { }

  ngOnInit() {
  }

}
