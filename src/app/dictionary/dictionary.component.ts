import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClearObservable } from '../shared/clear-observable';
import { takeUntil, tap } from 'rxjs/operators';
import { Word } from './shared/word.model';
import { DictionaryService } from './dictionary.service';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent extends ClearObservable implements OnInit {
  searchForm: FormGroup;
  words: Word[];

  constructor(private fb: FormBuilder,
              private dictionaryService: DictionaryService) {
    super();
  }

  ngOnInit() {
    this.initSearchForm();
  }

  private initSearchForm() {
    this.searchForm = this.fb.group({
      searchInput: ['']
    });

    this.searchForm.valueChanges.pipe(
      takeUntil(this.destroy$),
      tap((values) => this.findWords(values.searchInput))
    ).subscribe()
  }

  private findWords(filter: string) {
    this.dictionaryService.findWords(filter).pipe(
      takeUntil(this.destroy$),
      tap((data: Word[]) => this.words = data)
    ).subscribe();
  }

  addToDictionary(id: number) {
    this.dictionaryService.addWordToDictionary(id).pipe(
      takeUntil(this.destroy$),
      tap(() => (window as any).toastr.success('Yeeeey!!!'))
    ).subscribe();
  }
}
