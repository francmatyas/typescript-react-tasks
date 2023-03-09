import "./Tasks.scss";

import { useState } from "react";
import { Task as ITask, Tasks as ITasks } from "../../script/TaskUtils";

import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import Task from "./Task/Task";
import SortLabel from "./SortLabel/SortLabel";

interface ITasksProps {
  tasks: ITasks;
  sort: number;
  onEditTask: (task: any) => void;
}

function Tasks(props: ITasksProps) {
  const { tasks, sort, onEditTask } = props;
  const [showCompleted, setShowCompleted] = useState(true);

  function showCompletedHandler() {
    setShowCompleted(!showCompleted);
  }

  const sortedTasks = [
    [...tasks.getTasks()],
    [...tasks.sortByDate()],
    [...tasks.sortByFavorite()],
    [...tasks.sortByTitle()],
  ];

  function editTaskHandler(task: ITask) {
    onEditTask(task);
  }

  const uncompletedTasks = sortedTasks[sort].filter((task) => !task.completed);
  const completedTasks = sortedTasks[sort].filter((task) => task.completed);

  return (
    <section id="tasks">
      {uncompletedTasks.map((task) => (
        <Task task={task} key={task.id} onEditTask={editTaskHandler} />
      ))}
      <div id="tasks-completed">
        <button onClick={showCompletedHandler} id="tasks-completed__button">
          {showCompleted ? (
            <IoIosArrowDown size={24} />
          ) : (
            <IoIosArrowUp size={24} />
          )}
          {" Completed"}
        </button>
        {showCompleted && <div id="tasks-separator__line"></div>}
      </div>

      {showCompleted &&
        completedTasks.map((task) => (
          <Task task={task} key={task.id} onEditTask={editTaskHandler} />
        ))}

      <SortLabel sort={sort} />
    </section>
  );
}

export default Tasks;
