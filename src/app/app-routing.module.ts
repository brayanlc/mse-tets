import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './modules/character/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/character/character.module').then(m => m.CharacterModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
