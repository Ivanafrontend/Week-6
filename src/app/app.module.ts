import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { TableComponent } from './table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    ProductComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
