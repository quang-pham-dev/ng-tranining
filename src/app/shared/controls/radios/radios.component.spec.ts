import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosComponent } from './radios.component';

describe('RadiosComponent', () => {
  let component: RadiosComponent;
  let fixture: ComponentFixture<RadiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
