import { Task } from "../../type/task.type";
import { DisplayFlex } from "../atoms/flexbox"

type TaskListTitleProps = {
  finishedTaskList: Task[];
}

export const TaskListTitle: React.FC<TaskListTitleProps> = ({finishedTaskList}) => {

  return (
    <DisplayFlex>
      <h3>タスク一覧</h3>
      <h3>完了済みのタスク:{finishedTaskList.length}件</h3>
    </DisplayFlex>
  )
}