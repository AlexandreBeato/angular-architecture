import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/base-service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PeoplesService extends BaseService {
    private API_PEOPLES_ENDPOINT = 'people/';

    constructor(private http: HttpClient) { super(); }

    public getPeoples() {
        return this.http.get<People[]>
            (this.API_ENDPOINT + this.API_PEOPLES_ENDPOINT)
            .subscribe(
                resultado => {
                    console.log(resultado);
                }
            );
    }
}
