import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Observable, of } from 'rxjs';
import { Character } from '../character.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss'],
})
export class ContentLayoutComponent implements OnInit {
  houses$: Observable<any> = of();
  characters: Character[] = [];
  charactersTemp: Character[] = [];
  filterName: FormControl = new FormControl('');

  constructor(private houseService: CharacterService) {}

  ngOnInit(): void {
    this.houses$ = this.houseService.getCharacters();
    this.filterName.valueChanges.subscribe(name => {
      this.filterByFirstNameOrLastName(name);
    });
  }

  getByName(name: string | unknown): void {
    this.filterName.setValue('', { emitEvent: false });
    this.characters = this.houseService.getByName(name as string);
    this.charactersTemp = this.characters;
  }

  filterByFirstNameOrLastName(name: string): void {
    this.characters = this.charactersTemp.filter(character => {
      return (
        character.name.toLocaleLowerCase().search(name.toLocaleLowerCase()) !==
        -1
      );
    });
  }
}
