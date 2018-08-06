import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { peoplesRoute } from './peoples.routes';
import { PeoplesComponent } from './peoples.component';
import { PeopleListComponent } from './components/people-list.component';
import { AllPeoplesComponent } from './components/all-peoples.component';
import { PeoplesService } from './services/peoples.service';
import { HttpClientModule } from '@angular/common/http';
import { UrlPeopleCleanerPipe } from './pipes/url-people-cleaner.pipe';
import { DetailsPeopleComponent } from './components/details-people.component';

@NgModule({
    declarations: [
        PeoplesComponent,
        PeopleListComponent,
        AllPeoplesComponent,
        UrlPeopleCleanerPipe,
        DetailsPeopleComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(peoplesRoute)
    ],
    exports: [],
    providers: [
        PeoplesService
    ],
})
export class PeoplesModule { }
