import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Task';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl: string = 'http://localhost:5000/tasks';

    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        const tasks = this.http.get<Task[]>(this.apiUrl);
        return tasks;
    }

    getAndre() {
        return this.http.get('https://api.github.com/users/andrelarruda');
    }

    deleteTask(task: any): Observable<Task> {
        const url = `${this.apiUrl}/${task.id}`;
        return this.http.delete<Task>(url);
    }

    updateTaskReminder(task: any): Observable<Task> {
        const url = `${this.apiUrl}/${task.id}`;
        return this.http.put<Task>(url, task, httpOptions);
    }

    addTask(task: any): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task, httpOptions);
    }
}
