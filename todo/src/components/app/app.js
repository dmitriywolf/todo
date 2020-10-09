import React, { Component } from 'react';

import AppHeader from "../app-header/app-header";
import SearchPanel from '../search-panel/search-panel';
import TaskFilter from '../task-filter/task-filter';
import TasksList from "../task-list/tasks-list";
import AddTask from '../add-task/add-task';

import "./app.css";


export default class App extends Component {
  maxId = 100;

  state = {
    tasksArr: [
      this.createTaskItem('Изучить React + Redux'),
      this.createTaskItem('Изучить Node.js'),
      this.createTaskItem('Изучить Express.js'),
      this.createTaskItem('И наконец MongoDB')
    ]
  };

  // функция создания элемента 
  createTaskItem(text) {
    return {
      id: this.maxId++,
      text,
      important: false,
      done: false
    }
  }

  itemDeleted = (id) => {
    this.setState( ( { tasksArr }) => {
      // индекс элемента который собираемся удалять
      const index = tasksArr.findIndex( (el) => el.id === id);
  
      // массив до нужного элемента
      const before = tasksArr.slice(0, index);
      // массив после нужного элемента
      const after = tasksArr.slice(index + 1);
      // объединяем в новыый массив и получаем новый стейт
      const newArr = [ ...before, ...after];
      return {
        tasksArr: newArr
      };

    });
  };

  itemAdd = ( text ) => {
    // создаем новый элемент 
    const newItem = this.createTaskItem(text);

    this.setState( ( { tasksArr } ) => {
      // создаем новый массив который состоит из старого + новый элемент
      const newArr = [
        ...tasksArr, newItem
      ];
      return {
        tasksArr: newArr
      };
    });
  };

  onImportant = (id) => {
    this.setState( ( { tasksArr }) => {
      

    });
  };

  onDone = (id) => {
    console.log(`done: ${id}`);
  };


 render() {
  const { tasksArr } = this.state;

  return (
    <div className="app">
      <AppHeader todo="2" done="3"/>

      <div>
         <SearchPanel/>
         <TaskFilter/>
      </div>
      <TasksList 
        tasks={ tasksArr }
        itemDeleted = { this.itemDeleted }
        onDone = { this.onDone }
        onImportant = {this.onImportant }
      />
      <AddTask addItem = { this.itemAdd }/>
    </div>
  );

 };
}


