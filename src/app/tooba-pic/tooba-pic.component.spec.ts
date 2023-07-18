import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobaPicComponent } from './tooba-pic.component';

describe('ToobaPicComponent', () => {
  let component: ToobaPicComponent;
  let fixture: ComponentFixture<ToobaPicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToobaPicComponent]
    });
    fixture = TestBed.createComponent(ToobaPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
