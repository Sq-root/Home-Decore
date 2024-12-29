import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { rootRoutingModule } from './root-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    rootRoutingModule,
    CoreModule
  ],
  bootstrap: [MainComponent] // <--- Add this line
})
export class RootModule { }
