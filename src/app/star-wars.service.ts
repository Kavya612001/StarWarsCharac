import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { LogService } from "./log.service";
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  characters : {name: string, side: string} [] = [];
  // private characters = [
  //   {
  //     name: 'Luke Skywalker',
  //     side: '',
  //   },
  //   {
  //     name: 'Darth Vader',
  //     side: '',
  //   }
  // ];

  charactersChanges = new Subject<void>();
  constructor(private logService: LogService, private http: HttpClient) {}

  getCharacters(chosenList: string) {
    if(chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter( (char) => {
      return char.side === chosenList;
    })
  }

  fetchCharacters() {
    this.http.get('https://swapi.dev/api/people')
    .subscribe((data:any) => {
      const res = data['results'];
      this.characters = res.map((char: { name: any; }) => {
        return {name: char.name, side: ''};
      });
      this.charactersChanges.next();
    });
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
