import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from 'src/app/services/taskservice.service'

@Component({
  selector: 'app-taskform',
  templateUrl: './taskform.component.html',
  styleUrls: ['./taskform.component.css']
})
export class TaskformComponent implements OnInit {
  title: string ='';
  description : string = '';

  constructor(private taskService: TaskserviceService) { }

  ngOnInit() {
  }
  handleAdd(){
    this.taskService.addTask(this.title, this.description);
  }
}
