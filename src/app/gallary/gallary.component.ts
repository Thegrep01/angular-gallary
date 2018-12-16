import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';
import {MatDialog} from '@angular/material';
import { ImageDetailComponent } from '../image-detail/image-detail.component';


@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnChanges {

  imageVisible: any[] = [];
  image: any;
  @Input() filterBy = 'all';

  constructor(private imageService: ImageService, public dialog: MatDialog) {
    this.imageVisible = this.imageService.getImages();
  }

  openDialog(id: number) {
    this.imageService.id = id;
    const dialogRef = this.dialog.open(ImageDetailComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  ngOnChanges() {
    this.imageVisible = this.imageService.getImages();
  }

}
