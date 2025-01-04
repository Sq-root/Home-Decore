import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    HomeComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
