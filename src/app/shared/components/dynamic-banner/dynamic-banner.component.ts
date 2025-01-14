import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-banner',
  templateUrl: './dynamic-banner.component.html',
  styleUrls: ['./dynamic-banner.component.scss']
})
export class DynamicBannerComponent implements OnInit {
  @Input() public heading: string;
  @Input() public sub_heading: string;
  @Input() public img_name: string;
  @Input() public headingFontSize: string = '3rem'; // Default font size
  public img_path: string = '../../../../assets/Imgs/';

  constructor() { }

  ngOnInit(): void {
  }


  public getbackgroundImage() {
    return this.img_path + this.img_name;
  }
}
