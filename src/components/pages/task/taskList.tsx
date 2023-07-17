import { Task } from "../../../type/task.type";
import { TaskListTitle } from "../../molecules/taskListTitle";
import { TaskListTable } from "../../organisms/taskListTable";

type TaskListProps = {
  taskList: Task[];
  finishedTaskList: Task[];
  onTaskDone: (id: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  taskList, 
  finishedTaskList, 
  onTaskDone
}) => {

  const handleTaskDone = (id: number) => {
    onTaskDone(id);
  }

  return (
    <>
      <TaskListTitle finishedTaskList={finishedTaskList} />
      <TaskListTable taskList={taskList} onTaskDone={(id) => handleTaskDone(id)}  />
    </>
  )
}