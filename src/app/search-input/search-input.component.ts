import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';

interface person{
   nom: string,
   prenom: string,
   age: number
}

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent implements OnInit{

ngOnInit(): void {
    this.showMajeur()
}

  todos = signal<{ nom: string; prenom: string }[]>([{nom:"Tombeau", prenom:"Chrisnor"}]);
    persons = signal<person[]>([{nom:"Tombeau", prenom:"Chrisnor",age: 38},
        {nom:"Tombeau", prenom:"Shedmaër Chrisley",age: 7},
        {nom:"Tombeau", prenom:"Chrisnaïlove",age: 21},
        {nom:"Jean", prenom:"Edma Sherley",age: 31},
        {nom:"Elien", prenom:"Yvederlee Leissa",age: 19}
    ])
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

      showMajeur(){
      const perso = computed(()=>
           this.persons().filter(u=>u.age<18)
      );

      console.log(perso())
   }
}
