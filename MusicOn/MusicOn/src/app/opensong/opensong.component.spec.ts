import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpensongComponent } from './opensong.component';

describe('OpensongComponent', () => {
  let component: OpensongComponent;
  let fixture: ComponentFixture<OpensongComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpensongComponent]
    });
    fixture = TestBed.createComponent(OpensongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
