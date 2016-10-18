import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'; // router is like implementation, routerModule is angular module defined with @NgModule
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';  // Import from other files to this file

import { AppComponent } from './app.component';
import { ShipNameComponent } from './ship-name/ship-name.component';
import { ShipFilterComponent } from './ship-filter/ship-filter.component';
import { ShipListComponent } from './ship-list/ship-list.component';
import { ShipCardComponent } from './ship-card/ship-card.component';
import { StarshipService } from './starship.service' // import here to add to the providers list

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome/jack', pathMatch: 'full' }, // since all routes have empty space , so we say pathMatch: full to say only empty string
  { path: 'home', component: HomeComponent },
  { path: 'welcome/:who', component: WelcomeComponent } //  redirectTo: 'welcome/jack' -> specifying default value for the parameter
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    ShipNameComponent,
    ShipFilterComponent,
    ShipListComponent,
    ShipCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}), // Import from angular module to this module
  ],
  providers: [StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
