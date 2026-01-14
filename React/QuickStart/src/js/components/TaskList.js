import Header from "./Header";
import {List} from "./MainPage";

function TaskList() {
  const tasks = [
    { title: 'wake up at 5', isFruit: false, id: 1 },
    { title: 'watch todo', isFruit: false, id: 2 },
    { title: 'learn js', isFruit: true, id: 3 },
  ];
  return (
    <div className="todo">
      <Header headerTagName="h1" headerText="Task Lisk" headerClass="todoHeader" />
      <List items={tasks} />
    </div>
  );
}

export default TaskList;