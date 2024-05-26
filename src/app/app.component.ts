import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoComponent } from "./to-do/to-do.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: 
    [
      RouterOutlet,
      ToDoComponent,
      FormsModule
    ]
})
export class AppComponent {
  title = 'anularTodo';
}
