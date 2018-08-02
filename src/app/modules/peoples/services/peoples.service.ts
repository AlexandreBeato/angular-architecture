import { Injectable } from '@angular/core';
import { BaseService } from '../../../shared/base-service';

@Injectable()
export class PeoplesService extends BaseService {
    private api_peoples_endpoint = 'people/';

    public getPeoples() {

    }
}
