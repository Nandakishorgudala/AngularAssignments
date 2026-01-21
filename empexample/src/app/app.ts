import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployees } from "./employees/list-employees";
import { TwoWayBinding } from "../components/two-way-binding/two-way-binding";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListEmployees, TwoWayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bindingprac');
  myname="Nanda"
}
