import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-banner',
  templateUrl: './dynamic-banner.component.html',
  styleUrls: ['./dynamic-banner.component.scss']
})
export class DynamicBannerComponent implements OnInit {
  @Input() public heading: string = 'Embrace Your Space with Our Home Décor';
  @Input() public sub_heading: string = 'Curate Your Dream Home: Explore Our Home Décor Collection';

  constructor() { }

  ngOnInit(): void {
  }

}
