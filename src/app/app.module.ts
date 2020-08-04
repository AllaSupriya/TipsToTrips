import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule,Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthGuard} from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StatesComponent } from './states/states.component';
import { PlacesComponent } from './places/places.component';
import { CartComponent } from './cart/cart.component';

const appRoot : Routes = [{ path : '', component : HomeComponent },
{ path : 'login', component : LoginComponent },
{ path : 'register', component : RegisterComponent },{ path : 'main', component : MainPageComponent },
{ path : 'states', component : StatesComponent },
{ path : 'places', component : PlacesComponent },
{ path : 'cart', component : CartComponent }]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HomeComponent,
    MainPageComponent,
    StatesComponent,
    PlacesComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoot),
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
