import React, {useEffect} from "react";
import TaskItem from "./TaskItem";

function TaskList({tasks}) {

    return (
        <>
            <section className="card mt-5 shadow-sm">

                {tasks.map((task) =>
                        (
                            <TaskItem key={task.id} task={task}/>

                        )
                    )}


            </section>
        </>
    );
}

export default TaskList;