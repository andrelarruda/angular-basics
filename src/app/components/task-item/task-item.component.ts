import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

    // TODO: não consegui usar o tipo Task aqui!
    @Input() task: any;

    @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();

    @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

    remind: boolean = false;

    faTimes = faTimes;

    constructor() { }

    ngOnInit(): void {
    }

    onDelete(task: any) {
        this.onDeleteTask.emit(task);
    }

    onToggle(task: any) {
        this.onToggleReminder.emit(task);
    }

}
