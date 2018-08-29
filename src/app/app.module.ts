import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FormsModule } from '@angular/forms';
import { SalesComponent } from './sales/sales.component';
import { ChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';

const appRoutes: Routes = [
  {
    path: '',
    component: SalesComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,   
    SalesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    FormsModule,
    ChartsModule,
    MatTableModule
  ],
  providers: [
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
