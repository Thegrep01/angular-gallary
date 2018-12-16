import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';


@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnChanges {

  imageVisible: any[] = [];
  @Input() filterBy = 'all';

  constructor(private imageService: ImageService) {
    this.imageVisible = this.imageService.getImages();
  }

  ngOnChanges() {
    this.imageVisible = this.imageService.getImages();
  }

}
