import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';


import { GallaryComponent } from './gallary/gallary.component'
import { HeaderComponent } from './header/header.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ImageService } from './image-detail/shared/image.service';
import { ImageFilterPipe } from './image-detail/shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GallaryComponent,
    ImageDetailComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
