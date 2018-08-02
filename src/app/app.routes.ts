import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page.component';

export const AppRoutes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'peoples', loadChildren: './modules/peoples/peoples.module#PeoplesModule' },
];
