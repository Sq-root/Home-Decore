import { Component, OnInit } from '@angular/core';
import { homeDecorContent } from 'src/app/core/components/global-data';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  styleUrls: ['./custom-carousel.component.scss']
})
export class CustomCarouselComponent implements OnInit {
  public content: any = homeDecorContent

  constructor() { }

  ngOnInit(): void {
  }

}
