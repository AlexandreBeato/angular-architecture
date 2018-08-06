import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';

@Component({
    selector: 'app-all-films',
    templateUrl: '../pages/all-films.component.html'
})
export class AllFilmsComponent implements OnInit {

    films: Film[];
    filmDetailed: Film;

    constructor(private filmsService: FilmsService) { }

    ngOnInit(): void {
        this.getFilms();
    }

    getFilms() {
        this.filmsService.getFilms()
            .subscribe(films => this.films = films.results);
    }

    filmDetails(film: Film) {
        this.filmDetailed = film;
    }

    filmDetailClose() {
        this.filmDetailed = null;
    }
}
