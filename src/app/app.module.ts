import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainContainerComponent } from './container/main-container/main-container.component';
import { PageNotFoundComponent } from './container/page-not-found/page-not-found.component';
import { LoginComponent } from './container/login/login.component';
import { MapComponent } from './components/map/map.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    PageNotFoundComponent,
    MapComponent,
    SearchBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2DYCevqVMS4gaVhigniVcUdC1wntPUhM'
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
