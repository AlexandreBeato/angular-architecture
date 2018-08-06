import { Routes } from '@angular/router';
import { FilmsComponent } from './films.component';
import { AllFilmsComponent } from './components/all-films.component';

export const filmsRoutes: Routes = [
    {
        path: '', component: FilmsComponent,
        children: [
            { path: '', component: AllFilmsComponent }
        ]
    }
];
