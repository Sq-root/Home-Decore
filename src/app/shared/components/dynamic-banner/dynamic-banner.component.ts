import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-banner',
  templateUrl: './dynamic-banner.component.html',
  styleUrls: ['./dynamic-banner.component.scss']
})
export class DynamicBannerComponent implements OnInit {
  @Input() public heading: string;
  @Input() public subHeading: string;
  @Input() public imgName: string;
  @Input() public styleType: 'lg' | 'md' = 'lg';
  public imgPath: string = '../../../../assets/Imgs/';

  constructor() { }

  ngOnInit(): void {
  }


  public getbackgroundImage() {
    return this.imgPath + this.imgName;
  }
}
