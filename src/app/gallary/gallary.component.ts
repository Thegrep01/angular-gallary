import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { MatDialog } from '@angular/material';
import { ImageDetailComponent } from '../image-detail/image-detail.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent implements OnInit {

  public images: any;

  searchForm = new FormGroup({
    count: new FormControl(''),
    search: new FormControl('')
  });

  constructor(private imageService: ImageService, public dialog: MatDialog) { }

  openDialog(image: any) {
    this.imageService.image = image;
    this.dialog.open(ImageDetailComponent);
  }

  ngOnInit() {
    this.imageService.getImages().subscribe(value => {
      this.images = value;
    });
  }

  onSubmit() {
    if (this.searchForm.value.count >= 3 && this.searchForm.value.search) {
      this.imageService.getImages(this.searchForm.value.count, this.searchForm.value.search).subscribe(value => {
        this.images = value;
      });
    } else if (this.searchForm.value.count >= 3 && !this.searchForm.value.search) {
      this.imageService.getImages(this.searchForm.value.count).subscribe(value => {
        this.images = value;
      });
    } else if ((this.searchForm.value.count <= 3 || !this.searchForm.value.count) && this.searchForm.value.search) {
      this.imageService.getImages('20', this.searchForm.value.search).subscribe(value => {
        this.images = value;
      });
    } else {
      this.imageService.getImages().subscribe(value => {
        this.images = value;
      });
    }
  }
}
