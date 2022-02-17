import Card from './Components/cardComponent';

const todoProto = {
  isCompleted() {
    this.isCompleted = !this.isCompleted;
  },
};

// Create new to-do tasks
const newTodo = (
  id,
  title,
  description,
  dueDate,
  priority,
  notes,
  category
) => {
  return Object.create(todoProto, {
    id: {
      value: id,
    },
    title: {
      value: title,
    },
    description: {
      value: description,
    },
    dueDate: {
      value: dueDate,
    },
    priority: {
      value: priority,
    },
    notes: {
      value: notes,
    },
    category: {
      value: category,
    },
  });
};

// Project Factory Function for creating new projects/collections of to-do's.

const Project = ((projectTitle) => {
  // Array of all todo's. Each items of the array will be an object. Probably will use .map to render all the todo cards on the page
  let todoArray = [];

  const TodoNew = (props) => {
    let id = todoArray.length + 1;

    let { title, description, dueDate, priority, notes, category } = props;

    const todo = newTodo(
      id,
      title,
      description,
      dueDate,
      priority,
      notes,
      category
    );

    todoArray.push(todo);

    localStorage.setItem('todo', JSON.stringify(todoArray));

    const todoWrapper = document.getElementById('#test2');

    todoWrapper.remove();

    getTodos();
  };

  // const updateTodo = (id) => {
  //   console.log(id);
  // };

  // Filter the array and only return the items which don't match with the id of the to be deleted item.
  const deleteTodo = (id) => {
    let newArray = todoArray.filter(function (e) {
      return e.id !== id;
    });

    todoArray = newArray;

    localStorage.setItem('todo', JSON.stringify(todoArray));

    const todoWrapper = document.getElementById('#test2');

    todoWrapper.remove();

    getTodos();
  };

  const getTodos = () => {
    if (localStorage.getItem('todo') == undefined) {
      localStorage.setItem('todo', JSON.stringify(todoArray));
    }
    const localItems = localStorage.getItem('todo');
    const localArr = JSON.parse(localItems);
    // Persist todo's after reloading screen.
    todoArray = localArr;

    const todoListItems = document.getElementById('#test');
    const todoWrapper = document.createElement('div');

    todoWrapper.className = 'cards-list';
    todoWrapper.setAttribute('id', '#test2');

    if (localArr.length == 0) {
      const noTasks = document.createElement('p');
      noTasks.className = 'no-task';
      noTasks.textContent = 'Geen taken gevonden';

      todoWrapper.appendChild(noTasks);
    }

    localArr.forEach((item) => {
      console.log(item);
      let { id, title, description, dueDate, priority, category, label } = item;

      todoWrapper.append(
        Card(id, title, description, dueDate, priority, category, label)
      );
    });

    todoListItems.append(todoWrapper);
    return todoArray;
  };

  return { getTodos, deleteTodo, TodoNew };
})();

export default Project;
