import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsongsComponent } from './adminsongs.component';

describe('AdminsongsComponent', () => {
  let component: AdminsongsComponent;
  let fixture: ComponentFixture<AdminsongsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsongsComponent]
    });
    fixture = TestBed.createComponent(AdminsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
