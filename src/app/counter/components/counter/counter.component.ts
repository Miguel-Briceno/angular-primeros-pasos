import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="decrementBy(1)">-1</button>
    <hr>
    `
})

export class CounterComponent {
    public counter:number = 20;
    increaseBy(value:number): void{ this.counter+=value;}
    reset(): void{ this.counter=0;}
    decrementBy(value:number): void{this.counter-=value;}  
}