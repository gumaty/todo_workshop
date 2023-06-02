import React, {useEffect, useState} from "react";
import {API_KEY, API_URL} from "../api/constants";
import OperationItem from "./OperationItem";
import AddOperation from "./AddOperation";

function TaskItem({task, setTasks}) {

    const [operations, setOperations] =useState([]);
    const [isAddOperationClicked, setIsAddOperationClicked] =useState(false);


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

    const getOperations = (id) => {
        fetch(`${API_URL}/tasks/${id}/operations`, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => { setOperations(data.data); })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getOperations(task.id)
    }, []);

    function changeFormVisibility(){
        if (isAddOperationClicked === false) {
            setIsAddOperationClicked(true);
        } else {
            setIsAddOperationClicked(false);
        }
    }

    // console.log(operations);

    return (
        <>
            <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{task.title}</h5>
                    <h6 className="card-subtitle text-muted">{task.description}</h6>
                </div>
                <div>
                    <button onClick={changeFormVisibility} className="btn btn-info btn-sm mr-2">
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                    <button className="btn btn-dark btn-sm">
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>

                    {operations.length === 0 && (
                        <button onClick={deleteTask} className="btn btn-outline-danger btn-sm ml-2">
                            <i className="fas fa-trash false"></i>
                        </button>)}


                </div>
            </div>

                {isAddOperationClicked === true && (
                    <AddOperation task={task.id}/>
                )}

            <ul className="list-group list-group-flush">

                {operations
                    .sort((a, b) => {
                        return a.addedDate - b.addedDate;
                    })
                    .map((operation) =>
                    (
                        <OperationItem key={operation.id} operation={operation}/>

                    )
                )}

            </ul>
            </section>
        </>
    );
}

export default TaskItem;