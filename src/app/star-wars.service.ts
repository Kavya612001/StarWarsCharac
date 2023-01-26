import { Injectable } from "@angular/core";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  public characters = [
    {
      name: 'Luke Skywalker',
      side: '',
    },
    {
      name: 'Dark Vader',
      side: '',
    }
  ];

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
    this.logService.writeLog("Changed side of "+ charInfo.name+ ", new side: "+charInfo.side);
  }

}
