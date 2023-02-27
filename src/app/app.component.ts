import { Component } from '@angular/core';
import { Todo } from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Angular_ToDo';


  tasks:string[]=["Buy Milk","Mow lawn","Feed Cat","Take out trash"];

  allToDo:Todo[]=[
    {
      task: "Buy Milk",
      completed: false
    },
    {
      task: "Mow lawn",
      completed: true
    },
    {
      task:"Feed cat",
      completed: true
    },
    {
      task:"Take out trash",
      completed: false
    }
  ];

newToDo:Todo ={
  task:"",
  completed: false
};

AddToDo(){
  let result:Todo={
    task:this.newToDo.task,
    completed:false
  };
  this.allToDo.push(result);
}

// ClickToComplete(){
//   this.allToDo
// }



}
