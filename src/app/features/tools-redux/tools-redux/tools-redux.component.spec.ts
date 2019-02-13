import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsReduxComponent } from './tools-redux.component';

describe('ToolsReduxComponent', () => {
  let component: ToolsReduxComponent;
  let fixture: ComponentFixture<ToolsReduxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolsReduxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
