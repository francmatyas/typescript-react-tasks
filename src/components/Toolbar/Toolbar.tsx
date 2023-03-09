import "./Toolbar.scss";

import { useState } from "react";
import { Task } from "../../script/TaskUtils";

import { HiOutlinePlus, HiHeart } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineBars3BottomLeft,
  HiOutlineAtSymbol,
} from "react-icons/hi2";
import { Form, InputGroup } from "react-bootstrap";

interface IToolbarProps {
  onTaskCreate: (task: Task) => void;
  onSortChange: (sort: number) => void;
  sort: number;
}

function Toolbar(props: IToolbarProps) {
  const { sort, onSortChange, onTaskCreate } = props;
  const [taskTitle, setTaskTitle] = useState("");

  const selectIcons = [
    <HiOutlineBars3BottomLeft size={24} />,
    <HiOutlineCalendarDays size={24} />,
    <HiHeart size={24} />,
    <HiOutlineAtSymbol size={24} />,
  ];

  function addTaskHandler() {
    if (taskTitle !== "") {
      const newTask = new Task({ title: taskTitle });
      setTaskTitle("");

      onTaskCreate(newTask);
    }
  }
  function sortChangeHandler(event: any) {
    onSortChange(parseInt(event.target.value));
  }

  return (
    <header id="toolbar">
      <InputGroup className="toolbar-input__container">
        <Form.Control
          type="text"
          value={taskTitle}
          placeholder="Add a new task"
          className="toolbar-input__task"
          onChange={(event) => setTaskTitle(event.target.value)}
        />
        <button onClick={addTaskHandler} className="toolbar-input__confirm">
          <HiOutlinePlus size={24} />
        </button>
      </InputGroup>
      <InputGroup className="toolbar-sort__container">
        <Form.Select
          onChange={sortChangeHandler}
          className="toolbar-sort__select"
        >
          <option value="0">Sort by</option>
          <option value="1">Date</option>
          <option value="2">Favorite</option>
          <option value="3">Title</option>
        </Form.Select>
        <InputGroup.Text className="toolbar-sort__icon">
          {selectIcons[sort]}
        </InputGroup.Text>
      </InputGroup>
    </header>
  );
}
export default Toolbar;
