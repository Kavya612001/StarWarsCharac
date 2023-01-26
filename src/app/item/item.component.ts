import { Component, Input, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {

  @Input() character!: {name: string, side: string};

  constructor(private swSerive: StarWarsService) { }

  ngOnInit(): void {

  }

  onAssign(side: string) {
    // this.character.side = side;
    // this.sideAssigned.emit({name: this.character.name, side: side});
    this.swSerive.onSideChosen({name: this.character.name, side: side});
  }
}
