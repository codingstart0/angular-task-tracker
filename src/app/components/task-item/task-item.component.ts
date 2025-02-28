import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task | null = null;
  @Input() faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onDelete(task: Task | null) {
    if (task) {
      this.onDeleteTask.emit(task);
    }
  }
}
import { faAngular } from '@fortawesome/free-brands-svg-icons';
