import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';

import { ToppingService } from './service/topping.service';
import { StockQueryComponent } from './view/stock-query/stock-query.component';
import { OrderComponent } from './view/order/order.component';
import { SandwichService } from './service/sandwich.service';
import { SandwichTypeService } from './service/sandwich-type.service';
import { SandwichSizeService } from './service/sandwich-size.service';

import { AppComponent } from './app.component';

import { routing } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StockQueryComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  
    TableModule,
    RadioButtonModule,
    ButtonModule,
    
    routing
  ],
  providers: [ToppingService, SandwichTypeService, SandwichSizeService, SandwichService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
