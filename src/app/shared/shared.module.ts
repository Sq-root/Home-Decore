import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { DynamicBannerComponent } from './components/dynamic-banner/dynamic-banner.component';



@NgModule({
  declarations: [
    CustomCarouselComponent,
    DynamicBannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCarouselComponent,
    DynamicBannerComponent
  ]
})
export class SharedModule { }
