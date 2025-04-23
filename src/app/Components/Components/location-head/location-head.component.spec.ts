import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationHeadComponent } from './location-head.component';

describe('LocationHeadComponent', () => {
  let component: LocationHeadComponent;
  let fixture: ComponentFixture<LocationHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
