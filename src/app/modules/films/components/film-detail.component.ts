import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-film-detail',
    templateUrl: '../pages/film-detail.component.html'
})
export class FilmDetailComponent {

    @Input() film: Film;
    @Output() filmDetailClosed = new EventEmitter();
    constructor() { }

    filmDetailClose() {
        this.filmDetailClosed.emit();
    }
}
