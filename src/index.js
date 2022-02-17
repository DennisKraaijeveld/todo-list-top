import { format } from 'date-fns';

import Sidebar from './Layout/sidebar';
import Header from './Layout/header';
import TodoForm from './Components/todoForm';
import Project from './createProject';

import './style.css';

function Index() {
  const mainDiv = document.createElement('div');
  mainDiv.className = 'main';

  const contentArea = document.createElement('div');
  contentArea.setAttribute('id', '#main-content');
  contentArea.className = 'content-area';

  const todoSection = document.createElement('div');
  todoSection.className = 'todo-section';

  const todoMain = document.createElement('main');
  todoMain.className = 'todo-main';

  const primarySection = document.createElement('section');
  primarySection.className = 'primary-column';

  // Todo list and form area
  const todoListItems = document.createElement('ul');
  todoListItems.setAttribute('id', '#test');
  todoListItems.className = 'list-items';

  const todoFormSection = document.createElement('aside');
  todoFormSection.className = 'todo-form-section';

  todoFormSection.appendChild(TodoForm());

  // // Map over todoArray and display them in their section

  // Section header. TODO: Need to move to own module

  const headerContainer = document.createElement('div');
  const cardListHeader = document.createElement('h3');
  headerContainer.className = 'container';
  cardListHeader.textContent = 'Vandaag';
  cardListHeader.className = 'list-header';
  const currentDate = document.createElement('p');
  currentDate.className = 'date';
  let formatTime = format(new Date(), 'd MMMM');
  currentDate.textContent = formatTime;

  headerContainer.append(cardListHeader, currentDate);
  primarySection.append(headerContainer, todoListItems);

  todoSection.append(todoMain, todoFormSection);
  todoMain.append(primarySection);

  contentArea.append(Header(), todoSection);

  mainDiv.append(Sidebar(), contentArea);

  return mainDiv;
}

document.body.appendChild(Index());

Project.getTodos();
