import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  characters: {name: string, side: string}[] = [];
  loadedSide = 'all';
  subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private swService: StarWarsService) { }

  ngOnInit(): void {
    // this function is executed whenever the params in the url change (:side)
    this.activatedRoute.params.subscribe( (params) => {
      this.characters = this.swService.getCharacters(params['side']);
      this.loadedSide = params['side'];
    }
    );

    this.swService.charactersChanges.subscribe(() => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    })

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
