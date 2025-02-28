import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Retrieves a list of tasks from the API.
   *
   * @returns an observable of the list of tasks
   */
/******  a597614f-a25e-4509-9096-a527d425b744  *******/
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
