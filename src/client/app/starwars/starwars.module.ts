import { NgModule } from '@angular/core';
import { StarWarsComponent } from './starwars.component';
import { StarWarsRoutingModule } from './starwars-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [StarWarsRoutingModule, SharedModule],
  declarations: [StarWarsComponent],
  exports: [StarWarsComponent],
  providers: []
})
export class StarWarsModule { }
