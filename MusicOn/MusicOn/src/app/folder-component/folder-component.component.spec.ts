import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderComponentComponent } from './folder-component.component';

describe('FolderComponentComponent', () => {
  let component: FolderComponentComponent;
  let fixture: ComponentFixture<FolderComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FolderComponentComponent]
    });
    fixture = TestBed.createComponent(FolderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
