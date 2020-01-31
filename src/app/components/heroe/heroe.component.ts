import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

  heroe:Heroe

  constructor(private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      console.log( params['id'] );
      this.heroe = this._heroeService.getHeroe( params['id'] );
    });
  }

}
