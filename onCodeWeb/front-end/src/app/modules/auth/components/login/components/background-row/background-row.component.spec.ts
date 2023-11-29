import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundRowComponent } from './background-row.component';

describe('BackgroundRowComponent', () => {
  let component: BackgroundRowComponent;
  let fixture: ComponentFixture<BackgroundRowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackgroundRowComponent]
    });
    fixture = TestBed.createComponent(BackgroundRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
