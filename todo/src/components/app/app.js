import React, { Component } from 'react';

import AppHeader from "../app-header/app-header";
import AppTitle from '../app-title/app-title';
import SearchPanel from '../search-panel/search-panel';
import TasksList from "../task-list/tasks-list";
import AddTask from '../add-task/add-task';


export default class App extends Component {



 render() {


  const tasksArr = [
    {id: 1, text: 'Изучить React + Redux', important: true}, 
    {id: 2, text: 'Изучить Node.js', important: true}, 
    {id: 3, text: 'Изучить Express.js', important: false}, 
    {id: 4, text: 'И наконец MongoDB', important: false}
  ];




  return (

    <div>


      <AppTitle/>
      <SearchPanel/>
      <TasksList tasks={tasksArr}/>
      <AddTask/>



    </div>
    
  )
 }
}


