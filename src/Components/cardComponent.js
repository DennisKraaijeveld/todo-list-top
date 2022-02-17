import Project from '../createProject';

export default function Card(
  id,
  title,
  description,
  dueDate,
  priority,
  category,
  label
) {
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

  const completeWrapper = document.createElement('div');
  completeWrapper.className = 'complete-wrapper';

  const completeTodoBtn = document.createElement('div');
  completeTodoBtn.className = 'complete-btn';

  const checkIcon = document.createElement('span');
  checkIcon.textContent = '✓';

  const expandButton = document.createElement('div');
  expandButton.className = 'expand-button';
  expandButton.textContent = 'Show More';

  const expandableSection = document.createElement('div');
  expandableSection.className = 'expandable-hidden';

  expandButton.addEventListener('click', () => {
    expandableSection.classList.toggle('expandable-hidden');
    if (expandButton.textContent === 'Show More') {
      expandButton.textContent = 'Show Less';
    } else {
      expandButton.textContent = 'Show More';
    }
  });

  completeTodoBtn.addEventListener('click', () => {
    // toggle
  });

  const todoTable = document.createElement('dl');

  const todoDescription = document.createElement('div');
  todoDescription.className = 'table-section';

  const descriptionLabel = document.createElement('dt');
  const descriptionContent = document.createElement('dd');
  descriptionLabel.className = 'table-label';
  descriptionContent.className = 'table-content';

  descriptionLabel.textContent = 'Description';
  descriptionContent.textContent = description;

  const dueDateSection = document.createElement('div'),
    prioritySection = document.createElement('div'),
    labelSection = document.createElement('div');

  dueDateSection.className = 'table-section';
  prioritySection.className = 'table-section';
  labelSection.className = 'table-section';

  const dueDateLabel = document.createElement('dt'),
    priorityLabel = document.createElement('dt'),
    labelLabel = document.createElement('dt');

  dueDateLabel.className = 'table-label';
  priorityLabel.className = 'table-label';
  labelLabel.className = 'table-label';

  const dueDateContent = document.createElement('dd'),
    priorityContent = document.createElement('dd'),
    labelContent = document.createElement('dd');

  dueDateContent.className = 'table-content';
  priorityContent.className = 'table-content';
  labelContent.className = 'table-content';

  dueDateLabel.textContent = 'Deadline';
  dueDateContent.textContent = dueDate;
  priorityLabel.textContent = 'Priority';
  priorityContent.textContent = priority
    ? priority.charAt(0).toUpperCase() + priority.slice(1)
    : null;
  labelLabel.textContent = 'Label';
  labelContent.textContent = label;

  const removeButton = document.createElement('div');
  removeButton.className = 'remove-todo-btn';
  removeButton.textContent = 'Remove';

  let itemId = id;

  removeButton.addEventListener('click', () => {
    Project.deleteTodo(itemId);
  });

  // const todoLabel = document.createElement('div');
  // const todoLabelText = document.createElement('p');
  // todoLabelText.textContent = label.title;
  // todoLabelText.className = 'label-text';
  // todoLabel.className = 'todo-label';
  // const labelCircle = document.createElement('div');
  // labelCircle.className = 'todo-circle';
  // labelCircle.style.backgroundColor = label.color;

  // todoLabel.append(todoLabelText, labelCircle);

  todoTop.append(todoTitle, removeButton);

  dueDateSection.append(dueDateLabel, dueDateContent);
  prioritySection.append(priorityLabel, priorityContent);
  labelSection.append(labelLabel, labelContent);
  todoDescription.append(descriptionLabel, descriptionContent);
  todoTable.append(
    todoDescription,
    dueDateSection,
    prioritySection,
    labelSection
  );

  expandableSection.appendChild(todoTable);

  todoContent.append(todoTop, todoCategory, expandButton, expandableSection);

  completeTodoBtn.appendChild(checkIcon);

  completeWrapper.appendChild(completeTodoBtn);

  todoContainer.append(completeWrapper, todoContent);

  todoCard.appendChild(todoContainer);

  return todoCard;
}
