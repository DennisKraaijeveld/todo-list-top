// import { removeTodoBtn } from './user-interface';

const Card = (item) => {
  console.log(item);
  let { id, title, category, label } = item;

  const todoList = document.getElementById('#list-items');
  const todoCard = document.createElement('div');
  todoCard.className = 'outer-card';

  const todoContainer = document.createElement('div');
  todoContainer.className = 'todo-container';

  const todoContent = document.createElement('div');
  todoContent.className = 'todo-content';

  const todoTop = document.createElement('div');
  todoTop.className = 'todo-top';

  const todoTitle = document.createElement('h3');
  todoTitle.textContent = title;
  todoTitle.className = 'todo-title';
  const todoCategory = document.createElement('p');
  todoCategory.textContent = category;
  todoCategory.className = 'todo-category';
  const todoLabel = document.createElement('div');
  const todoLabelText = document.createElement('p');
  todoLabelText.textContent = label.title;
  todoLabelText.className = 'label-text';
  todoLabel.className = 'todo-label';
  const labelCircle = document.createElement('div');
  labelCircle.className = 'todo-circle';
  labelCircle.style.backgroundColor = label.color;

  todoLabel.append(todoLabelText, labelCircle);
  todoTop.append(todoTitle, todoLabel);

  todoContent.append(todoTop, todoCategory);

  todoContainer.appendChild(todoContent);

  todoCard.appendChild(todoContainer);

  todoList.appendChild(todoCard);
};

export default Card;
