import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoList } from './components/todo-list-component/todo-list-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jsonwebprac');
}
