import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { CharacterComponent } from './components/character/character.component';
import { RemoveEmptyNamesPipe } from './pipes/remove-empty-names.pipe';

@NgModule({
  declarations: [ContentLayoutComponent, MenuComponent, CharacterComponent, RemoveEmptyNamesPipe],
  imports: [CommonModule, CharacterRoutingModule, ReactiveFormsModule],
})
export class CharacterModule {}
