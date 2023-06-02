import React, {useEffect} from "react";
import TaskItem from "./TaskItem";

function TaskList({tasks}) {

    return (
        <>


                {tasks
                    .sort((a, b) => {
                        return a.addedDate - b.addedDate;
                    })
                    .map((task) =>
                        (
                            <TaskItem key={task.id} task={task}/>

                        )
                    )}



        </>
    );
}

export default TaskList;