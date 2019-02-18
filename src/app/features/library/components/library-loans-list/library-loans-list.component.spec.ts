import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryLoansListComponent } from './library-loans-list.component';

describe('LibraryLoansListComponent', () => {
  let component: LibraryLoansListComponent;
  let fixture: ComponentFixture<LibraryLoansListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryLoansListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryLoansListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
