import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters: {name: string, side: string}[] = [];

  constructor(private activatedRoute: ActivatedRoute, private swService: StarWarsService) { }

  ngOnInit(): void {
    // this function is executed whenever the params in the url change (:side)
    this.activatedRoute.params.subscribe( (params) => {
      this.characters = this.swService.getCharacters(params['side'])
    });
  }
}
