import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino:string;

  constructor(private _activatedRoute: ActivatedRoute, private _heroeService: HeroesService) {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroeService.buscarHeroes( params['termino'] );
    });
  }

  ngOnInit() {
  }

}
