import { TaskList } from "../../components/pages/task/taskList";
import { useTaskList } from "./hooks/useTaskList";

export const TaskListContainer: React.FC = () => {

  const { taskList, finishedTasks, handleFinished } = useTaskList();

  return (
    <TaskList 
      finishedTaskList={finishedTasks} 
      taskList={taskList}
      onTaskDone={(id) => handleFinished(id)}
    />
  );
}