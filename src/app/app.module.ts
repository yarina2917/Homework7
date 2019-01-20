import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { TablelistComponent } from './components/main/tablelist/tablelist.component';
import { GalleryComponent } from './components/main/gallery/gallery.component';
import { TypographyComponent } from './components/main/typography/typography.component';

import { MatIconModule, MatTableModule } from '@angular/material';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    TablelistComponent,
    GalleryComponent,
    TypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MDBBootstrapModule.forRoot(),
    GalleriaModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
