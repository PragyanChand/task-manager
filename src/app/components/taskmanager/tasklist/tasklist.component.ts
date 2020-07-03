import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from 'src/app/services/taskservice.service';
import {Task} from 'src/app/models/task';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskserviceService) { 

  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      this.tasks = data;
    });
  }

}
