import { Injectable } from '@angular/core';
import { Dog } from '../models/dog-database';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor() { }

  public getDogs() : Dog[]
  {
    let dog = new Dog();
    dog.id = 1;
    dog.name = "Bacardi DDog"
    dog.firstName = "Bolt"
    dog.lastName = "Bepper"
    dog.breed = "Morkie"

    return [dog];
  };

}
