import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { LibraryEntryComponent } from './components/library-entry/library-entry.component';
import { LibraryListComponent } from './components/library-list/library-list.component';
import { LibraryComponent } from './library.component';
import { reducers } from './reducers';
import { LibraryLoansListComponent } from './components/library-loans-list/library-loans-list.component';

@NgModule({
  declarations: [LibraryComponent,
    LibraryEntryComponent,
    LibraryListComponent,
    LibraryLoansListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('library', reducers),
    FormsModule
  ]
})
export class LibraryModule { }
