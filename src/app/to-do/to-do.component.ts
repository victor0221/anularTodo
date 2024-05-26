import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  taskArray = [{id: 1234, name: "Clean Room", due:"2024-01-01"}];
  editIndex: number | null = null;
  editedTask: any = {};

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    const newToDo = {
      id: Math.floor(1000 + Math.random() * 9000),
      name: form.value.name,
      due: form.value.due,
    }
    this.taskArray.push(newToDo);
  }

  deleteTask(index: number) {
    this.taskArray.splice(index, 1);
    if (index === this.editIndex) {
      this.editIndex = null;
    }
  }

  editTask(index: number) {
    this.editIndex = index;
    this.editedTask = { ...this.taskArray[index] };
  }

  saveTask(index: number) {
    this.editedTask.name = this.taskArray[index].name;
    this.editedTask.due = this.taskArray[index].due;
    this.editIndex = null;
  }
  
  

  cancelEdit() {
    this.editIndex = null;
  }
}
