import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';


@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent {

  imageVisible: any[] = [];

  constructor(private imageService: ImageService) {
    this.imageVisible = this.imageService.getImages();
  }

}
