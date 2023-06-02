import React, {useState} from "react";
import {API_KEY, API_URL} from "../api/constants";

function NewTask({tasks, setTasks}) {

    const [values, setValues] = useState({title: "", description: "", status: "open"});

    function handleChange(event) {
        const value = event.target.value;
        setValues({
            ...values,
            [event.target.name]: value

        });
    }

    const addNewTask = (data) => {

        fetch(`${API_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: API_KEY,
            },
            body: JSON.stringify(data)
        })
            .then((response) => response.json())
            .catch((err) => console.log(err));
    };

     function handleSubmit(event) {
        event.preventDefault();
        // console.log(`Dane z handleSubmit ${values}`);
        //  console.log(values);
        addNewTask(values);


        // const product = await addNewTask(values);
    }

    return (
        <>
            <div className="card shadow">
                <div className="card-body">
                    <h1 className="card-title">New task</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   name="title"
                                   onChange={handleChange}
                                   value={values.title}
                                   placeholder="Title"/>
                        </div>
                        <div className="form-group">
                            <input type="text"
                                   className="form-control"
                                   name="description"
                                   onChange={handleChange}
                                   value={values.description}
                                   placeholder="Description"/>
                        </div>
                        <button className="btn btn-info">
                            Add task
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default NewTask;