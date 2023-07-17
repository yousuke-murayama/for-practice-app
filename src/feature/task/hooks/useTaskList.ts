import { useEffect, useState } from "react"
import { Task } from "../../../type/task.type"

export const useTaskList = () => {
  const [taskList, setTaskList] = useState([] as Task[]);

  const handleFinished = (id: number) => {
    const newTaskList: Task[] = taskList.map((task) => {
      return task.id === id? {...task, isFinished: true} : task;
    });

    setTaskList(newTaskList);
  }

  const finishedTasks = taskList.filter((task) => task.isFinished === true);

  useEffect(() => {
    const url = "http://127.0.0.1:3000/tasks";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((dataList: Task[]) => {
        return createTaskListFromJson(dataList);
      })
      .then((taskList) => {
        setTaskList(taskList);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const createTaskListFromJson = (dataList: Task[]) => {
    const taskList: Task[] = [];
    dataList.forEach((data) => {
      taskList.push({
        id: data.id,
        title: data.title,
        detail: data.detail,
        deadline: data.deadline,
        isFinished: data.isFinished,
        postAt: data.postAt
      });
    })
    return taskList;
  }

  return { taskList, finishedTasks, handleFinished }

}