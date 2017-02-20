import {Component} from '@angular/core';

const todos = [
    {
        title:     'Lessons JavaScript',
        completed: true
    },
    {
        title : 'Lessons Angular 2',
        completed : false
    },
    {
        title: 'Job app',
        completed : false
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})

export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;

    toggle(todo:any){
        todo.completed = !todo.completed;
    }

    delete(todo:any){
        let index = this.todos.indexOf(todo);

        if(index > -1){
            this.todos.splice(index,1);
        }
    }
}