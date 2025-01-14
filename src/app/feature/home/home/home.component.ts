import { Component, OnInit } from '@angular/core';
import { homeDecorContent } from 'src/app/core/components/global-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public content: any = homeDecorContent

  constructor() { }

  ngOnInit(): void {
  }

}
