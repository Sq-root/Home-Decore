import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public carTitle: string = ''
  @Input() public cardBgImgName: string = 'Green Fern Plant';
  public imgPath: string = '../../../../assets/Imgs/';

  constructor() { }

  ngOnInit(): void {
  }

}
