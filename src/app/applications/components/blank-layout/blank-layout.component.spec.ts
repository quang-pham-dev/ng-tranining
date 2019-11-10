import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankLayoutComponent } from './blank-layout.component';

describe('BlankLayoutComponent', () => {
  let component: BlankLayoutComponent;
  let fixture: ComponentFixture<BlankLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
