import { Component } from '@angular/core';
import { Dog } from './models/dog-database';
import { DogService } from './services/dog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DogDatabase.UI';

  dogs: Dog[] = [];
  dogToEdit?: Dog;

  constructor(private DogService: DogService) { };

  ngOnInit(): void {
    this.DogService.getDogs().subscribe((result: Dog[]) => (this.dogs = result));
  };

  initNewDog() {
    this.dogToEdit = new Dog();
  }

  editDog(dog: Dog) {
    this.dogToEdit = dog;
  }

  updateDogList(dogs: Dog[]) {
    this.dogs = dogs;
  }
}
