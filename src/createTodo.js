const Todo = (() => {
  const createTodo = (props) => {
    let { title, description, dueDate, priority, notes, category } = props;

    // Populating the todo object
    const newTodo = {
      title: title,
      description: description,
      dueDate: dueDate,
      priority: priority,
      notes: notes,
      category: category,
    };
    console.log(newTodo);
  };
  return { createTodo };
})();

export default Todo;
