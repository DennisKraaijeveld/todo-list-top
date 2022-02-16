import Todo from './createTodo';

const Project = ((props) => {
  // Array of all todo's. Each items of the array will be an object. Probably will use .map to render all the todo cards on the page
  let todoArray = [
    {
      id: 1,
      title: 'Vandaag moet ik iets opsturen naar mijn werk',
      category: 'School',
      label: {
        color: 'red',
        title: 'Science',
      },
    },
    {
      id: 2,
      title: 'Vandaag moet ik iets opsturen naar mijn werk',
      category: 'School',
      label: {
        color: 'yellow',
        title: 'Math',
      },
    },
  ];

  const TodoNew = (props) => {
    Todo.createTodo(props);
  };

  // Filter the array and only return the items which don't match with the id of the to be deleted item.
  const deleteTodo = (id) => {
    let newArray = todoArray.filter(function (e) {
      return e.id !== id;
    });
  };

  const getTodos = () => {
    if (todoArray.length == 0) return 'Geen taken gevonden';
    return todoArray;
  };

  return { getTodos, deleteTodo, TodoNew };
})();

// When user press 'add new todo', createTodo function will pass all the data
// Project.createTodo(1, 'test');
// Project.getTodos();

export default Project;
