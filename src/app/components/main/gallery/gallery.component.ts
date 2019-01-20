import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public images: any[];

  ngOnInit() {
    this.images = [];
    this.images.push({source: 'assets/1.jpg', alt: 'Description for Image 1', title: 'Title 1'});
    this.images.push({source: 'assets/2.jpg', alt: 'Description for Image 2', title: 'Title 2'});
    this.images.push({source: 'assets/3.jpg', alt: 'Description for Image 3', title: 'Title 3'});
  }

}
