import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {
  tasks: Observable<Task[]> = [];

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>("http://localhost:3000/tasks");
  }
  /*deleteTask(id): void {

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
        console.log(this.tasks[i]);
        return this.tasks[i];
      }
    }
  }*/
}
