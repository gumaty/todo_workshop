import React from "react";
import TaskItem from "./TaskItem";

function TaskList({tasks, setTasks}) {

    return (
        <>
                {tasks
                    .sort((a, b) => {
                        return a.addedDate - b.addedDate;
                    })
                    .map((task) =>
                        (
                            <TaskItem key={task.id} task={task} setTasks={setTasks}/>
                        )
                    )}</>
    );
}

export default TaskList;