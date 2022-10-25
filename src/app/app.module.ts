import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './component/history/history.component';
import { SearchComponent } from './component/search/search.component';
import { ProfileComponent } from './component/profile/profile.component';
import { GithubService } from './services/github.service';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HistoryComponent,
    SearchComponent,
    ProfileComponent,
  ],
  bootstrap: [AppComponent],
  providers: [GithubService, DataService],
})
export class AppModule {}
