import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/base-service';
import { HttpClient } from '../../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs';
import { retry } from '../../../../../node_modules/rxjs/operators';

@Injectable()
export class FilmsService extends BaseService {
    private API_FILMS_ENDPOINT = 'films/';

    constructor(private http: HttpClient) { super(); }

    getFilms(): Observable<{ count: number, results: Film[] }> {
        return this.http.get<{ count: number, results: Film[] }>
            (this.API_ENDPOINT + this.API_FILMS_ENDPOINT).pipe(retry(3));
    }
}
