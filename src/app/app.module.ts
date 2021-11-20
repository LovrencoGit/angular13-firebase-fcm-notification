import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule
  ],
  declarations: [ AppComponent, HomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}