import { Injectable } from '@angular/core';
import { Dog } from '../models/dog-database';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private url = "DogDatabase";
  constructor(private http: HttpClient) { }

  public getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(`${environment.apiUrl}/${this.url}`);
  };


  public updateDog(dog: Dog): Observable<Dog[]> {

    return this.http.put<Dog[]>(`${environment.apiUrl}/${this.url}`, dog);
  };

  public createDog(dog: Dog): Observable<Dog[]> {
    return this.http.post<Dog[]>(`${environment.apiUrl}/${this.url}`, dog, {
      headers: {

      }
    }
    );
  };


  public deleteDog(dog: Dog): Observable<Dog[]> {
    return this.http.post<Dog[]>(`${environment.apiUrl}/${this.url}/${dog.id}`, dog);
  };

}
