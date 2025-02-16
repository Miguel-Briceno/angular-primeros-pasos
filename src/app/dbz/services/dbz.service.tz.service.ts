import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 } from 'uuid'



@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {   
        id:v4(),
        name: 'Krillin',
        power: 1000
     },
     {  
        id:v4(),
        name: 'Goku',
        power: 9500
     },
     {
        id:v4(),
        name: 'Vegeta',
        power: 7500
     }
 ];
 addCharacter(character: Character):void{ 
     const newCharacter:Character = {
        id: v4(),
        ...character
     }    
     this.characters.push(newCharacter);  
 }

 deleteCharacterById(id:string)
 {
     this.characters = this.characters.filter(character => character.id != id);
 }
  

}
