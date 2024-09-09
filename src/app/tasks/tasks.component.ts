import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input() name: string | undefined;
  isAddingTask = false;
 
  
  constructor(public tasksService: TasksService) {
}; //dependency injection
  

  get selectedUserTasks() {  
    return this.tasksService.getUserTasks(this.userId);

  
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }


  }


