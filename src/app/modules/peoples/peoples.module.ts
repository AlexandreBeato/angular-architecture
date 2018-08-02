import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { peoplesRoute } from './peoples.routes';
import { PeoplesComponent } from './peoples.component';
import { PeopleListComponent } from './components/people-list.component';
import { AllPeoplesComponent } from './components/all-peoples.component';

@NgModule({
    declarations: [
        PeoplesComponent,
        PeopleListComponent,
        AllPeoplesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(peoplesRoute)
    ],
    exports: [],
    providers: [],
})
export class PeoplesModule { }
