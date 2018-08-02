import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { peoplesRoute } from './peoples.routes';
import { PeoplesComponent } from './peoples.component';

@NgModule({
    declarations: [
        PeoplesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(peoplesRoute)
    ],
    exports: [],
    providers: [],
})
export class PeoplesModule { }
