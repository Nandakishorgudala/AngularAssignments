import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Todoservice {
  constructor(private http:HttpClient){}

  getTodos(){
    console.log('world!')
    return this.http.get<any>('http://jsonplaceholder.typicode.com/todos')
  }

  getTodoById(id:string){
    return this.http.get<any>(`http://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
