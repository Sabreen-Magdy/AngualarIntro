import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar } from './components/Day01/navBar/navBar.component';
import { FooterComponent } from './components/Day01/footer/footer.component';
import { AsideComponent } from './components/Day01/aside/aside.component';
import { HomeComponent } from './components/Day01/home/home.component';
import { SliderComponent } from './components/Day01/slider/slider.component';
import { ImageSliderComponent } from './components/Day02/image-slider/image-slider.component';
import { StudentRegisterComponent } from './components/Day02/student-register/student-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductContainerComponent } from './components/Day03/product-container/product-container.component';
import { ProductFormComponent } from './components/Day03/product-form/product-form.component';
import { ProductDisplyComponent } from './components/Day03/product-disply/product-disply.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    SliderComponent,
    ImageSliderComponent,
    StudentRegisterComponent,
    ProductContainerComponent,
    ProductFormComponent,
    ProductDisplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
