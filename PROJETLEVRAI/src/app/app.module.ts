import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TachesComponent } from './component/taches/taches.component';
import { FiltreTachePipe } from './pipe/filtre-tache.pipe';
import {FiltreTacheundefinedPipe} from './pipe/filtre-tache.pipe';
import {FiltreTachependingPipe} from './pipe/filtre-tache.pipe';
import {FiltreTacheIPPipe} from './pipe/filtre-tache.pipe';
import {FiltreTacheCPPipe} from './pipe/filtre-tache.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TachesComponent,
    FiltreTachePipe,
    FiltreTacheundefinedPipe,
    FiltreTachependingPipe,
    FiltreTacheIPPipe,
    FiltreTacheCPPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
