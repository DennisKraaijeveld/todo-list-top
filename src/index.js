import './style.css';

import Sidebar from './sidebar';
import Header from './header';
import CardList from './cardList';
import TodoForm from './todoForm';
import { format } from 'date-fns';

Sidebar();

const mainDiv = document.getElementById('#content');
const container = document.createElement('div');
container.setAttribute('id', '#main-content');
container.className = 'content-area';

const todoGrid = document.createElement('div');
todoGrid.setAttribute('id', '#todo-grid');
todoGrid.className = 'todo-grid';

const todoList = document.createElement('main');
todoList.setAttribute('id', '#list');
todoList.className = 'todo-list';

const primarySection = document.createElement('section');
primarySection.setAttribute('id', '#primary');
primarySection.className = 'primary-column';

const todoListItems = document.createElement('ul');
todoListItems.setAttribute('id', '#list-items');
todoListItems.className = 'list-items';

const todoFormSection = document.createElement('aside');
todoFormSection.setAttribute('id', '#form');
todoFormSection.className = 'todo-form-section';

// TODO: Make separate component for the header of each list
const headerContainer = document.createElement('div');
const cardListHeader = document.createElement('h3');
headerContainer.className = 'container';
cardListHeader.textContent = 'Vandaag';
cardListHeader.className = 'list-header';
const currentDate = document.createElement('p');
currentDate.className = 'date';
let formatTime = format(new Date(), 'd MMMM');
currentDate.textContent = formatTime;

mainDiv.appendChild(container);

Header();

headerContainer.append(cardListHeader, currentDate);
primarySection.append(headerContainer, todoListItems);

todoGrid.append(todoList, todoFormSection);
todoList.appendChild(primarySection);

container.appendChild(todoGrid);

CardList();
TodoForm();
