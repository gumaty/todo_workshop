import {API_KEY, API_URL} from "../api/constants";
import React, {useState} from "react";

function AddOperation() {

    const [operations, setOperations] = useState({description: "", timeSpent: 0});

    function handleChange(event) {
        const value = event.target.value;
        setOperations({
            ...operations,
            [event.target.name]: value
        });
    }

    const addNewOperation = (data) => {

        fetch(`${API_URL}/tasks/${id}/operations`, {
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
        addNewOperation(operations)

    }

    return (
        <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text"
                           name="description"
                           className="form-control"
                           onChange={handleChange}
                           value={operations.description}
                           placeholder="Operation description"/>
                    <div className="input-group-append">
                        <button className="btn btn-info">
                            Add
                            <i className="fas fa-plus-circle ml-1"></i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddOperation;