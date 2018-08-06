import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-details-people',
    templateUrl: '../pages/details-people.component.html'
})
export class DetailsPeopleComponent {
    @Input() peopleDetailed: People;
    @Output() detailedClosed = new EventEmitter();

    constructor() { }

    closeDetails() {
        this.peopleDetailed = null;
        this.detailedClosed.emit();
    }
}
