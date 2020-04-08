import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    disc: string;
    todos: Todo[];

    ngOnInit() {
        this.todos = [];
        this.disc = '';
    }

    addTodo(): void {
        if (this.disc != '') {
            const newTodo:Todo = {
                todoId: Date.now(),
                disc: this.disc,
                isDone: false
            };
            this.todos.push(newTodo);
        }
        this.disc = '';
        console.log('new todo added');
    }

    deleteTodo(todoId: number): void {
        this.todos = this.todos.filter(todo => todo.todoId !== todoId);
        console.log('todo ' + todoId + ' deleted');
    }

}
