import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStockItemComponent } from './create-stock-item/create-stock-item.component';
import { LoginComponent } from './stock/login/login.component';
import { RegisterComponent } from './stock/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';

const appRoutes: Routes = [

  {path : 'login' , component : LoginComponent},

  {path : 'register' , component : RegisterComponent},

  {path: 'stockItem' , component : StockItemComponent},

{path: 'stockDetails/:code' , component : StockDetailsComponent},

 {path : 'createStock' , component : CreateStockItemComponent},

  {path : '' , redirectTo : '/login' , pathMatch : 'full'},

 {path : '**' , redirectTo : '/register' }

  


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
