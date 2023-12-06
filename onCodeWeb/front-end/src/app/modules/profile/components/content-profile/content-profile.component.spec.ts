import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProfileComponent } from './content-profile.component';

describe('ContentProfileComponent', () => {
  let component: ContentProfileComponent;
  let fixture: ComponentFixture<ContentProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentProfileComponent]
    });
    fixture = TestBed.createComponent(ContentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
