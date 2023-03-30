import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksHomeComponent } from './books-home/books-home.component';
import { CardModule } from 'primeng/card';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipePipe } from './pipes/search-pipe.pipe';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksHomeComponent,
    SearchPipePipe,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CardModule,
    ScrollPanelModule,
    DialogModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CalendarModule,
    BrowserAnimationsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
