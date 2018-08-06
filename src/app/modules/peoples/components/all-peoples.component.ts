import { Component, OnInit } from '@angular/core';
import { PeoplesService } from '../services/peoples.service';

@Component({
    selector: 'app-all-peoples',
    templateUrl: '../pages/all-peoples.component.html'
})
export class AllPeoplesComponent implements OnInit {

    peoples: People[];
    peopleDetailed: People;

    constructor(private peopleService: PeoplesService) { }

    ngOnInit(): void {
        this.getPeoples();
    }

    getPeoples() {
        this.peopleService.getPeoples()
            .subscribe(peoples => this.peoples = peoples.results);
    }

    seeDetails(people: People) {
        this.peopleDetailed = people;
    }

    detailedClose() {
        this.peopleDetailed = null;
    }
}
