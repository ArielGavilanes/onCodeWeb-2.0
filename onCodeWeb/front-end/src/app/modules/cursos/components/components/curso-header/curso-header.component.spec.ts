import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoHeaderComponent } from './curso-header.component';

describe('CursoHeaderComponent', () => {
  let component: CursoHeaderComponent;
  let fixture: ComponentFixture<CursoHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoHeaderComponent]
    });
    fixture = TestBed.createComponent(CursoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
