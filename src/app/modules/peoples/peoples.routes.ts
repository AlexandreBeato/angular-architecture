import { Routes } from '@angular/router';
import { PeoplesComponent } from './peoples.component';
import { AllPeoplesComponent } from './components/all-peoples.component';

export const peoplesRoute: Routes = [
    {
        path: '', component: PeoplesComponent,
        children: [
            { path: '', component: AllPeoplesComponent }
        ]
    }
];
