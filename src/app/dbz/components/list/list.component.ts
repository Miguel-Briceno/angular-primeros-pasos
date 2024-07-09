
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'app-dbz-list', 
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent { 

  @Output()
  public deleteId: EventEmitter<string> = new EventEmitter();


  @Input()
  public characterList: Character[] = [
    {
      name:'Trunk',
      power: 10
    }
  ]
  
  
  public deleteCharacterById(id?:string):void{
    if( !id ) return;
    //Emitir el id del personaje
    this.deleteId.emit(id);
  }

}
