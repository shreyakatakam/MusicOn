import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysoundsComponent } from './displaysounds.component';

describe('DisplaysoundsComponent', () => {
  let component: DisplaysoundsComponent;
  let fixture: ComponentFixture<DisplaysoundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplaysoundsComponent]
    });
    fixture = TestBed.createComponent(DisplaysoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
