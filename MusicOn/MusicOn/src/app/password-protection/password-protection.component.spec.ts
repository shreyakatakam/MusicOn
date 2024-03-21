import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordProtectionComponent } from './password-protection.component';

describe('PasswordProtectionComponent', () => {
  let component: PasswordProtectionComponent;
  let fixture: ComponentFixture<PasswordProtectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordProtectionComponent]
    });
    fixture = TestBed.createComponent(PasswordProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
