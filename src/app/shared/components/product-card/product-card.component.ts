import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() public card_title: string = '';
  @Input() public card_bg_img: string = 'Green Fern Plant';
  @Input() public istitleVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
