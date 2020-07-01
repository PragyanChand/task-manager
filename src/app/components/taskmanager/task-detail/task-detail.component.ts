import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from 'src/app/services/taskservice.service';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task'

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task = null;

  constructor(private taskService: TaskserviceService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.task = this.taskService.getSingleTask(id);
  }

}
