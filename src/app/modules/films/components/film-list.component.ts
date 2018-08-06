import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-film-list',
    templateUrl: '../pages/film-list.component.html'
})
export class FilmListComponent {

    @Input() films: Film[];
    @Output() filmSelected = new EventEmitter<Film>();

    constructor() { }

    detailFilm(film: Film) {
        this.filmSelected.emit(film);
    }
}
