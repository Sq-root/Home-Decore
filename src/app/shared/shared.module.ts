import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { DynamicBannerComponent } from './components/dynamic-banner/dynamic-banner.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



@NgModule({
  declarations: [
    CustomCarouselComponent,
    DynamicBannerComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCarouselComponent,
    ProductCardComponent,
    DynamicBannerComponent
  ]
})
export class SharedModule { }
