import Project from './createProject';
export function addTodoBtn() {
  const todoList = document.getElementById('#buttons');
  const addButton = document.createElement('div');
  addButton.textContent = '+';
  addButton.className = 'add-button';

  addButton.addEventListener('click', () => {
    Project.TodoNew({
      title: 'test',
      dueDate: '18-02-2022',
      description: 'Test test test',
      priority: 'high',
      note: null,
      category: 'School',
    });
  });
  todoList.appendChild(addButton);
}

export function sendTodoBtn() {
  console.log('send');
}

export function removeTodoBtn() {}
