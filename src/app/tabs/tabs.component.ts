import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {


  characters: {name: string, side: string}[] = [];
  chosenList = 'all';

  constructor(private swService: StarWarsService) { }

  ngOnInit(): void {
  }

  getCharacters() {
    this.characters = this.swService.getCharacters(this.chosenList);
    return this.characters;
  }

  onChoose(side: string) {
    this.chosenList = side;
  }
}
