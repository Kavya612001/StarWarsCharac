import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  characters = [
    {
      name: 'Luke Skywalker',
      side: '',
    },
    {
      name: 'Dark Vader',
      side: '',
    }
  ];

  chosenList = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  getCharacters() {
    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter( (char) => {
      return char.side === this.chosenList;
    })
  }

  onChoose(side: string) {
    this.chosenList = side;
  }

  onSideChosen(charInfo: any) {
    const pos = this.characters.findIndex((char) => {
      return char.name  === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
  }

}
