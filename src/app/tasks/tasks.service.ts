import { Injectable } from "@angular/core";
import { newTaskData } from "./task/task.model";

@Injectable({providedIn: 'root'})

export class TasksService {
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary: 'Learn all the basics and advanced features of Angular and how to apply them in real-world applications.',
          dueDate: '2024-09-30'
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-10-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-11-15',
        },
      ];

      constructor() {
        this.tasks = localStorage.getItem('tasks');
        
        if (tasks) {
            this.tasks = tasks;
        }
      }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);  
}
    
        completeTask(taskId: string) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        }
      
        addTask(taskData: newTaskData, userId: string) {
            this.tasks.unshift({
                id: new Date().getTime().toString(),
                userId: userId,
                title: taskData.title,
                summary: taskData.summary,
                dueDate: taskData.date,
              });
        };

        removeTask (id: string) {
            this.tasks = this.tasks.filter(task => task.id !== id);
        }
}