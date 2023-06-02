import React from "react";
import {API_KEY, API_URL} from "../api/constants";

function TaskItem({task}) {

    function deleteTaskAPI(id) {
        fetch(`${API_URL}/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: API_KEY,
            }
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    }

    function deleteTask() {
        deleteTaskAPI(task.id);
    }

    return (
        <>
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{task.title}</h5>
                    <h6 className="card-subtitle text-muted">{task.description}</h6>
                </div>
                <div>
                    <button className="btn btn-info btn-sm mr-2">
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                    <button className="btn btn-dark btn-sm">
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>
                    <button onClick={deleteTask} className="btn btn-outline-danger btn-sm ml-2">
                        <i className="fas fa-trash false"></i>
                    </button>
                </div>
            </div>
        </>
    );
}

export default TaskItem;