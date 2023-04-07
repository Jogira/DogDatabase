import { DogService } from './../../services/dog.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dog } from 'src/app/models/dog-database';

@Component({
  selector: 'app-edit-dog',
  templateUrl: './edit-dog.component.html',
  styleUrls: ['./edit-dog.component.css']
})
export class EditDogComponent implements OnInit {
  @Input() dog?: Dog;
  @Output() dogsUpdated = new EventEmitter<Dog[]>();

  constructor(private dogService: DogService) { }

  ngOnInit(): void { }

  updateDog(dog: Dog) {
    this.dogService
      .updateDog(dog)
      .subscribe((dogs: any) => this.dogsUpdated.emit(dogs));
  }

  createDog(dog: Dog) {
    this.dogService
      .createDog(dog)
      .subscribe((dogs: any) => this.dogsUpdated.emit(dogs));
  }

  deleteDog(dog: Dog) {
    this.dogService
      .deleteDog(dog)
      .subscribe((dogs: any) => this.dogsUpdated.emit(dogs));
  }
}
