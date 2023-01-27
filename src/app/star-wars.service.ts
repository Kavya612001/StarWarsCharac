import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  private characters = [
    {
      name: 'Luke Skywalker',
      side: '',
    },
    {
      name: 'Darth Vader',
      side: '',
    }
  ];

  charactersChanges = new Subject<void>();
  constructor(private logService: LogService) {}

  getCharacters(chosenList: string) {
    if(chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter( (char) => {
      return char.side === chosenList;
    })
  }

  onSideChosen(charInfo: {name: string, side: string}) {
    const pos = this.characters.findIndex((char) => {
      return char.name  === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanges.next();
    this.logService.writeLog("Changed side of "+ charInfo.name+ ", new side: "+charInfo.side);
  }

  addCharacter(name: string, side: string) {
    const pos = this.characters.findIndex( (char) => {
      return char.name === name;
    })
    if(pos !== -1) {
      return;
    }
    const newChar = {name: name, side: side};
    this.characters.push(newChar);
  }
}
