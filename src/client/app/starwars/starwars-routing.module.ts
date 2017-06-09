import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StarWarsComponent } from './starwars.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: StarWarsComponent }
    ])
  ],
  exports: [RouterModule]
})
export class StarWarsRoutingModule { }
