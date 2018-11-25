import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DictionaryComponent } from './dictionary.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DictionaryComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DictionaryComponent
  ]
})
export class DictionaryModule { }
