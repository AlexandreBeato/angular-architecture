import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { AllFilmsComponent } from './components/all-films.component';
import { RouterModule } from '../../../../node_modules/@angular/router';
import { filmsRoutes } from './films.routes';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
import { FilmsService } from './services/films.service';
import { FilmListComponent } from './components/film-list.component';
import { FilmDetailComponent } from './components/film-detail.component';

@NgModule({
    declarations: [
        FilmsComponent,
        AllFilmsComponent,
        FilmListComponent,
        FilmDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(filmsRoutes),
        HttpClientModule
    ],
    exports: [],
    providers: [
        FilmsService
    ],
})
export class FilmsModule { }
