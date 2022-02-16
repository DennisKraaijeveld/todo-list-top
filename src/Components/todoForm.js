import Project from '../createProject';

var todoPriorities = ['Low', 'Medium', 'High'];

export default function TodoForm() {
  const formWrapper = document.createElement('form');

  formWrapper.className = 'form-container';

  const titleInput = document.createElement('input'),
    descriptionInput = document.createElement('input'),
    dueDateInput = document.createElement('input'),
    priorityInput = document.createElement('div'),
    notesInput = document.createElement('input'),
    categoryInput = document.createElement('input');

  const titleLabel = document.createElement('label'),
    descriptionLabel = document.createElement('label'),
    dueDateLabel = document.createElement('label'),
    priorityLabel = document.createElement('label'),
    notesLabel = document.createElement('label'),
    categoryLabel = document.createElement('label');

  // Add priority options to div
  todoPriorities.forEach((item) => {
    const priorityButton = document.createElement('label');
    const screenReaderInput = document.createElement('input');
    const priorityText = document.createElement('p');

    priorityButton.className = 'priority-button';
    screenReaderInput.className = 'screen-reader';
    screenReaderInput.setAttribute('type', 'radio');
    screenReaderInput.setAttribute('name', 'priority');
    screenReaderInput.setAttribute('id', 'priority-button');

    screenReaderInput.value = item;

    priorityText.textContent = item;

    priorityInput.appendChild(priorityButton);

    priorityButton.append(screenReaderInput, priorityText);
  });

  // Label titles
  titleLabel.className = 'form-labels';
  titleLabel.textContent = 'Title';
  descriptionLabel.className = 'form-labels';
  descriptionLabel.textContent = 'Description';
  dueDateLabel.className = 'form-labels';
  dueDateLabel.textContent = 'Deadline';
  priorityLabel.className = 'form-labels';
  priorityLabel.textContent = 'Priority';
  notesLabel.className = 'form-labels';
  notesLabel.textContent = 'Notes (optional)';
  categoryLabel.className = 'form-labels';
  categoryLabel.textContent = 'Category';

  // Set classNames and types

  titleInput.className = 'form-inputs';
  titleInput.setAttribute('type', 'text');
  descriptionInput.className = 'form-inputs';
  descriptionInput.setAttribute('type', 'text');
  dueDateInput.className = 'form-inputs';
  dueDateInput.setAttribute('type', 'date');
  priorityInput.className = 'priority-form';
  priorityInput.setAttribute('id', 'prio');
  notesInput.className = 'form-inputs';
  notesInput.setAttribute('type', 'text');
  categoryInput.className = 'form-inputs';
  categoryInput.setAttribute('type', 'text');

  // Send Todo Button
  const submitTodoButton = document.createElement('button');
  submitTodoButton.className = 'submit-button';
  submitTodoButton.textContent = 'Create Todo';
  submitTodoButton.setAttribute('type', 'button');

  submitTodoButton.addEventListener('click', (e) => {
    // TODO: get value from priority radiobuttons
    // const test = document.querySelector('input[name="priority"]');
    // console.log(test.checked);
    if (titleInput.value === '') return;
    if (descriptionLabel.value === '') return;
    if (categoryLabel.value === '') return;

    Project.TodoNew({
      title: titleInput.value,
      dueDate: dueDateInput.value,
      description: descriptionInput.value,
      priority: 'high',
      notes: notesInput.value,
      category: categoryInput.value,
    });
  });

  formWrapper.append(
    titleLabel,
    titleInput,
    descriptionLabel,
    descriptionInput,
    dueDateLabel,
    dueDateInput,
    priorityLabel,
    priorityInput,
    notesLabel,
    notesInput,
    categoryLabel,
    categoryInput,
    submitTodoButton
  );

  return formWrapper;
}
