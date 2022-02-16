import Project from './createProject';
import Card from './cardComponent';

const CardList = () => {
  // TODO filters through all todos and push intime todo's to an array, and overdue todos to an array
  Project.getTodos().map((item) => {
    Card(item);
  });
};

export default CardList;
