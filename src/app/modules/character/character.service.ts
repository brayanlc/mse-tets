import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Character } from './character.model';
import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

interface Menu {
  [key: string]: number;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  houses: Menu = {};
  characters: Character[] = [];

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Menu> {
    if (Object.keys(this.houses).length) {
      return of<Menu>(this.houses);
    }
    return this.http.get<Character[]>(`${environment.apiUrl}/characters`).pipe(
      tap(characters => (this.characters = characters)),
      map(characters => {
        characters.forEach(character => {
          if (this.houses[character.house]) {
            this.houses[character.house] += 1;
          } else {
            this.houses[character.house] = 1;
          }
        });
        return this.houses;
      }),
    );
  }

  getByName(name: string): Character[] {
    return this.characters.filter(character => character.house === name);
  }
}
