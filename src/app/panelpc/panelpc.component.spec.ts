import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelpcComponent } from './panelpc.component';

describe('PanelpcComponent', () => {
  let component: PanelpcComponent;
  let fixture: ComponentFixture<PanelpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
