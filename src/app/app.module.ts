import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { StockItemCartComponent } from './stock-item-cart/stock-item-cart.component';
import { StockItemFavoriteComponent } from './stock-item-favorite/stock-item-favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateStockItemComponent } from './create-stock-item/create-stock-item.component';
import { StockService } from './services/stock.service';
import { LoginComponent } from './stock/login/login.component';
import { RegisterComponent } from './stock/register/register.component';
import { StockDetailsComponent } from './stock/stock-details/stock-details.component';
import { MainComponent } from './oranje/main/main.component';
import { ClubComponent } from './oranje/club/club.component';
import { ContactComponent } from './oranje/contact/contact.component';
import { SinceComponent } from './oranje/since/since.component';
import { AwardComponent } from './oranje/award/award.component';
import { VideosComponent } from './oranje/videos/videos.component';
import { GalleryComponent } from './oranje/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    StockItemComponent,
    StockItemCartComponent,
    StockItemFavoriteComponent,
    CreateStockItemComponent,
    LoginComponent,
    RegisterComponent,
    StockDetailsComponent,
    MainComponent,
    ClubComponent,
    ContactComponent,
    SinceComponent,
    AwardComponent,
    VideosComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
