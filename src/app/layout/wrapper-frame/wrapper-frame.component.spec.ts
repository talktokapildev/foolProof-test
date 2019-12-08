import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperFrameComponent } from './wrapper-frame.component';

describe('WrapperFrameComponent', () => {
  let component: WrapperFrameComponent;
  let fixture: ComponentFixture<WrapperFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
