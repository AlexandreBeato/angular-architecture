import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { HomePageComponent } from './components/home-page.component';
import { SettingsService } from './settings/settings.service';
import { HttpClientModule } from '@angular/common/http';

export function getSettings(settingsService: SettingsService) {
  return () => settingsService.getSettings();
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes, { useHash: false }),
    HttpClientModule
  ],
  providers: [
    SettingsService,
    { provide: APP_INITIALIZER, useFactory: getSettings, deps:  [SettingsService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
