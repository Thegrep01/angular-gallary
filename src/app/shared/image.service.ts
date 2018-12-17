import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ImageService {

    public url: string;
    // public per_page: string;

    private KEY = environment.API_KEY;
    private API = environment.API_URL;
    private URL = `${this.API}${this.KEY}&q=urban&per_page=`;



    constructor(private http: HttpClient) { }

    getImages(per_page: string = '20', search: string = ''): Observable<any> {
        return this.http.get(`${this.URL}&per_page=${per_page}&q=${search}`);
    }

    getImage() {
        return this.url;
    }
}

