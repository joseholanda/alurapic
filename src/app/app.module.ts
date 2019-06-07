import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotosModule } from './components/photos/photos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
