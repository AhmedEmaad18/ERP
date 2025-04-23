import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './Components/head/head.component';
import { SearchPaginationComponent } from './Components/search-pagination/search-pagination.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DataComponent } from './Components/data/data.component';
import { LocationComponent } from './Components/location/location.component';
import { LayoutComponent } from './Components/Components/layout/layout.component';
import { LocationHeadComponent } from './Components/Components/location-head/location-head.component';
import { SearchLocationComponent } from './Components/Components/search-location/search-location.component';
import { DataTableComponent } from './Components/Components/data-table/data-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QNewComponent } from './Components/Components/q-new/q-new.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    SearchPaginationComponent,
    DataComponent,
    LocationComponent,
    LayoutComponent,
    LocationHeadComponent,
    SearchLocationComponent,
    DataTableComponent,
    QNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatTableModule,
    MatPaginatorModule, MatIconModule ,FormsModule,CommonModule,ReactiveFormsModule,MatFormFieldModule,MatSelectModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
