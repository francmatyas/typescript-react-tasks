import "./Task.scss";
import { useState } from "react";
import { Task as ITask } from "../../../script/TaskUtils";

import TextareaAutosize from "react-textarea-autosize";
import DateDisplay from "../DateDisplay/DateDisplay";

import { HiOutlinePencil } from "react-icons/hi2";
import {
  HiOutlineHeart,
  HiHeart,
  HiCheckCircle,
  HiOutlineCheckCircle,
  HiOutlineCheck,
} from "react-icons/hi";

interface ITaskProps {
  task: ITask;
  onEditTask: (task: any) => void;
}

function Task(props: ITaskProps) {
  const { task, onEditTask } = props;

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(task.title);

  function editTitleHandler(event: any) {
    event.stopPropagation();
    if (edit) {
      task.title = title;
      onEditTask(task);
    }
    setEdit(!edit);
  }

  return (
    <div id="task">
      <div className="task__controls">
        <button
          className="task-button task__complete"
          onClick={() => {
            task.completed = !task.completed;
            onEditTask(task);
          }}
        >
          {task.completed ? (
            <HiCheckCircle size={24} />
          ) : (
            <HiOutlineCheckCircle size={24} />
          )}
        </button>
        <button
          className="task-button task__controls__favorite"
          onClick={() => {
            task.favorite = !task.favorite;
            onEditTask(task);
          }}
        >
          {task.favorite ? (
            <HiHeart size={24} style={{ color: "#EF6F6C" }} />
          ) : (
            <HiOutlineHeart size={24} />
          )}
        </button>
      </div>

      <div id="task__title">
        {edit ? (
          <TextareaAutosize
            onChange={(event) => setTitle(event.target.value)}
            onKeyPress={(event) => {
              event.key === "Enter" && editTitleHandler(event);
            }}
            id="task__title__input"
            placeholder={title}
            value={title}
            maxRows={5}
          ></TextareaAutosize>
        ) : (
          <h3 onDoubleClick={editTitleHandler}>{title}</h3>
        )}
      </div>
      <div className="task__controls">
        <DateDisplay date={task.completion} />
        <button
          className="task-button task__controls__edit"
          onClick={editTitleHandler}
        >
          {edit ? <HiOutlineCheck size={24} /> : <HiOutlinePencil size={24} />}
        </button>
      </div>
    </div>
  );
}
export default Task;
