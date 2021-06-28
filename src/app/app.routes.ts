import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockQueryComponent } from './view/stock-query/stock-query.component';
import { OrderComponent } from './view/order/order.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/order', pathMatch: 'full' },
    { path: 'order', component: OrderComponent },
    { path: 'stock-query', component: StockQueryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
