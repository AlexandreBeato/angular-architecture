import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APP_SETTINGS } from "./appsettings";

@Injectable()

export class SettingsService {
    constructor(private http: HttpClient) { }

    getSettings(): Promise<any> {
        const promise = this.http.get('appsettings.json')
            .toPromise()
            .then(settings => {
                Object.assign(APP_SETTINGS, settings);
                return settings;
            });

        return promise;
    }
}
