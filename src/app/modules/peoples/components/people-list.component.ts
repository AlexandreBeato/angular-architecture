import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-people-list',
    templateUrl: '../pages/people-list.component.html'
})
export class PeopleListComponent {

    @Input() peoples: People[];
    @Output() detailedPeople = new EventEmitter<People>();

    constructor() { }

    detailPeople(people: People) {
        this.detailedPeople.emit(people);
    }
}
