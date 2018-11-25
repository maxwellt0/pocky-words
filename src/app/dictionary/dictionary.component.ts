import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClearObservable } from '../shared/clear-observable';
import { takeUntil, tap } from 'rxjs/operators';
import { Word } from './shared/word.model';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent extends ClearObservable implements OnInit {
  searchForm: FormGroup;
  wordsOptions: Word[];

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.initSearchForm();
  }

  private initSearchForm() {
    this.searchForm = this.fb.group({
      'searchInput': []
    });

    this.searchForm.valueChanges.pipe(
      takeUntil(this.destroy$),
      tap((data: Word[]) => this.wordsOptions = data)
    ).subscribe();
  }
}
