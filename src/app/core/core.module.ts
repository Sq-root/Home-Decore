import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DynamicBannerComponent } from './components/dynamic-banner/dynamic-banner.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DynamicBannerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DynamicBannerComponent
  ]
})
export class CoreModule { }
