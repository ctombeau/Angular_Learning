import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, Injector, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { CounterComponent } from './counter/counter.component';
import { MyCounterComponent } from './my-counter/my-counter.component';


interface person{
   nom: string,
   prenom: string,
   age: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CounterComponent, MyCounterComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'learn';
  counter=10;
  searchText = signal('');
  filteredPersons = computed(()=>{
      const search = this.searchText().toLowerCase().trim();
      return this.persons().filter(person=>
        person.nom.toLowerCase().includes(search) ||
        person.prenom.toLowerCase().includes(search)
      )
  })

  onSearch(event: Event){
      const value = (event.target as HTMLInputElement).value;
      this.searchText.set(value)
  }

  resetSearch() {
    this.searchText.set('');
  }

  readonly count = signal(10);
  private injector = inject(Injector);
  todos = signal<{ nom: string; prenom: string }[]>([{nom:"Tombeau", prenom:"Chrisnor"}]);
  persons = signal<person[]>([{nom:"Tombeau", prenom:"Chrisnor",age: 38},
      {nom:"Tombeau", prenom:"Shedmaër Chrisley",age: 7},
      {nom:"Tombeau", prenom:"Chrisnaïlove",age: 21},
      {nom:"Jean", prenom:"Edma Sherley",age: 31},
      {nom:"Elien", prenom:"Yvederlee Leissa",age: 19}
  ])


    onIncrement(){
        this.counter++;
    }
    
   ngOnInit(){
     /*
      const count = signal(0);
      console.log("this signal has a value : "+count());
      count.set(3);
      console.log("this signal has a value : "+count());
      count.update(v=>v+1);
      console.log("this signal has a value : "+count());
      */
     /*
      const count: WritableSignal<number> = signal(0);
      const doubleCount: Signal<number> = computed(() => count() * 2);
      //doubleCount.set(3);
      console.log("this signal has a value : "+count());
      count.set(30);
      console.log("this signal has a value 2: "+count());
      count.update(x=> x*5);
      console.log("this signal has a value 3: "+count());
      this.todos.update(u=>[...u,{nom:"Jean", prenom:"Edma Sherley"}]);
      console.log(this.todos()[1])

      const double = computed(()=>count()*2);
      console.log("this signal has a double value : "+double());
     */
      this.showMajeur()
   }

   constructor(){
    
      effect(()=>{
          console.log(`The current value signal is: ${this.count()}`);
      }, {injector: this.injector});
      
   }

   showMajeur(){
      const perso = computed(()=>
           this.persons().filter(u=>u.age<18)
      );

      console.log(perso())
   }
      
}
