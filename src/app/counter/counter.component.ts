import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'counter',
  standalone:true,
  //imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  
    value = input(0,{
      transform : (value: number)=> value * 10
    });
    
    constructor(){
        effect(()=>{
            console.log(`new counter value ${this.value()}`)
        })
    }
   
}
