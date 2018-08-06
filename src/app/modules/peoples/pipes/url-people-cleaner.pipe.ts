import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'urlPeopleCleaner' })
export class UrlPeopleCleanerPipe implements PipeTransform {
    transform(url: string): string {
        return url.replace('https://swapi.co/api/people/', '').replace('/', '');
    }
}
