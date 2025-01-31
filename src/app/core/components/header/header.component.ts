import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMenu(event): void {
    event.stopPropagation();
    this.showMenu = !this.showMenu;
  }

  @HostListener('document:click')
  private onDocumentClick(event: MouseEvent): void {
    if (this.showMenu) {
      this.showMenu = false;
    }
  }

}
