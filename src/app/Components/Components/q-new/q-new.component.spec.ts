import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QNewComponent } from './q-new.component';

describe('QNewComponent', () => {
  let component: QNewComponent;
  let fixture: ComponentFixture<QNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
