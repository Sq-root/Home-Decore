import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBannerComponent } from './dynamic-banner.component';

describe('DynamicBannerComponent', () => {
  let component: DynamicBannerComponent;
  let fixture: ComponentFixture<DynamicBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
