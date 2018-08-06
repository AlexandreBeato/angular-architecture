import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/base-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../../node_modules/rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class PeoplesService extends BaseService {
    private API_PEOPLES_ENDPOINT = 'people/';

    constructor(private http: HttpClient) { super(); }

    public getPeoples(): Observable<{ count: number, results: People[] }> {
        return this.http.get<{ count: number, results: People[] }>
            (this.API_ENDPOINT + this.API_PEOPLES_ENDPOINT).pipe(retry(3));
    }
}
