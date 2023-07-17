import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { Task } from "../../type/task.type"
import { StyledTable } from "../atoms/table/table";
import { StyledButton } from "../atoms/button";

type TaskListTableProps = {
  taskList: Task[];
  onTaskDone: (id: number) => void; 
}

export const TaskListTable: React.FC<TaskListTableProps> = ({taskList, onTaskDone}) => {

  const handleTaskDone = (id: number): void => {
    onTaskDone(id);
  }

  const TaskListRows = taskList.map((task) => {
    return (
      <TableRow key={task.id}>
        <TableCell align='left'>{task.title}</TableCell>
        <TableCell align='left'>{task.detail}</TableCell>
        <TableCell align='left'>{task.deadline}</TableCell>
        <TableCell align='left'>{task.isFinished? "完了" : "未実施"}</TableCell>
        <TableCell align='left'>{task.postAt}</TableCell>
        <TableCell align='left'>
          <StyledButton
            key={task.id}
            variant="contained" 
            disabled={task.isFinished} 
            onClick={handleTaskDone(task.id)}
          >
            タスクを完了する
          </StyledButton>
        </TableCell>
      </TableRow>
    )
  });

  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell align='left'>タスク名</TableCell>
          <TableCell align='left'>詳細</TableCell>
          <TableCell align='left'>期限</TableCell>
          <TableCell align='left'>進捗</TableCell>
          <TableCell align='left'>タスク作成日</TableCell>
          <TableCell align='left'>操作</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {TaskListRows}
      </TableBody>
    </StyledTable>
  )
}