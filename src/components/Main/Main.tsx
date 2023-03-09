import "./Main.scss";
import Tasks from "../Tasks/Tasks";
import { Task, Tasks as ITasks } from "../../script/TaskUtils";

interface IMainProps {
  data: ITasks;
  sort: number;
  onEditTask: (task: any) => void;
}

function Main(props: IMainProps) {
  const { data, sort, onEditTask } = props;

  function editTaskHandler(task: Task) {
    onEditTask(task);
  }

  return (
    <main id="main">
      <div id="main-card">
        <Tasks tasks={data} sort={sort} onEditTask={editTaskHandler} />
        <address id="main-author">
          This is a demo aplication created by{" "}
          <a rel="author" href="https://www.francmatyas.com/">
            Matyáš Franc
          </a>
        </address>
      </div>
    </main>
  );
}
export default Main;
