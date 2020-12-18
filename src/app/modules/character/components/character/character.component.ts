import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  @Input() characters: Character[] = [];

  constructor() {}

  ngOnInit(): void {}
}
