import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list-hero.component.html',
  styleUrl: './list-hero.component.css'
})
export class ListHeroComponent {
  public heroNames:string[] = ['Spiderman', 'Hulk', 'Superman', 'Thor']
  public heroErase?: string;
  eraseHero():void {
    this.heroErase = this.heroNames.pop();

  }

}
