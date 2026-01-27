import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todoservice } from '../../services/todoservice';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list-component.html',
  styleUrl: './todo-list-component.css',
})
export class ToDoList implements OnInit {
  // 1. Initialize as a signal to fix the "not rendering" issue
  todos = signal<any[]>([]);

  constructor(private todoService: Todoservice) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (response) => {
        // 2. Update the signal with the API data
        this.todos.set(response);
        console.log('Data received:', this.todos());
      },
      error: (err) => console.error('API Error:', err)
    });
  }
}