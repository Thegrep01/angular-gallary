import { Routes } from '@angular/router';

import { GallaryComponent } from './app/gallary/gallary.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';

export const routes: Routes = [
    { path: 'gallery', component: GallaryComponent },
    { path: 'image/:id', component: ImageDetailComponent },
    { path: '', redirectTo: '/gallery', pathMatch: 'full' }
];
