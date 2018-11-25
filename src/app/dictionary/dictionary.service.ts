import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Word } from './shared/word.model';
import { SERVER_API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor(private httpClient: HttpClient) {
  }

  findWords(filter: string): Observable<Word[]> {
    const url = `${SERVER_API_URL}/words`;

    return this.httpClient.get<Word[]>(url, {params: {filter}})
  }

  addWordToDictionary(id: number): Observable<void> {
    const url = `${SERVER_API_URL}/words/personal`;

    return this.httpClient.post<void>(url, {id});
  }

}
