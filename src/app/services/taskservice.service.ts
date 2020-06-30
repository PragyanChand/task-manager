import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  tasks: Task[] = [
    {
    id: 1002,
    title:'Angular Learning',
    description:'I love to learn angular',
    completed : false,
    date : new Date()

    },
    {
      id: 1003,
    title:'Node Learning',
    description:'I love to learn node',
    completed : false,
    date : new Date()

    },
    {
      id: 1004,
    title:'Bootstrap Learning',
    description:'I love to learn Bootstrap',
    completed : false,
    date : new Date()

    },
    {
      id: 1007,
    title:'Html Learning',
    description:'I love to learn Html',
    completed : false,
    date : new Date()

    },
    {
      id: 1010,
    title:'CSS Learning',
    description:'I love to learn css',
    completed : false,
    date : new Date()

    }
  ];

  constructor() { }
  getTasks(): Task[] {
    return this.tasks;
  }
  deleteTask(id): void {

    for (let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].id === id){
        this.tasks.splice(i,1);
        break;
      }
    }

  }

  addTask(title, description): void {

    const newTask = new Task(
      this.tasks.length + 1,
      title,
      description
    )
      this.tasks.push(newTask);
  }

  getSingleTask(id): Task {
    for (let i = 0; i < this.tasks.length; i++){
      if(this.tasks[i].id == id){
        return this.tasks[i];
      }
    }
  }
}
