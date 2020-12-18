import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Input() menu: any;
  @Output() selectedHouse: EventEmitter<string> = new EventEmitter<string>();
  clicked: string | null;

  constructor() {
    this.menu = {};
    this.clicked = null;
  }

  ngOnInit(): void {}

  onSelectedHouse(house: string | unknown): void {
    this.clicked = house as string;
    this.selectedHouse.emit(house as string);
  }
}
