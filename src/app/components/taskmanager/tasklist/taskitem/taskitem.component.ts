import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import {TaskserviceService} from 'src/app/services/taskservice.service'

@Component({
  selector: 'app-taskitem',
  templateUrl: './taskitem.component.html',
  styleUrls: ['./taskitem.component.css']
})
export class TaskitemComponent implements OnInit {

  @Input() task: Task;

  constructor( private taskService:TaskserviceService ) { }

  ngOnInit() { }
  handleDelete(){
    this.taskService.deleteTask(this.task.id);
  }

}
