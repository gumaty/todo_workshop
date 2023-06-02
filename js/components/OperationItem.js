import React from "react";

function OperationItem() {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                Opis operacji


                <span className="badge badge-success badge-pill ml-2">2
                            h 15m
                        </span>

            </div>

            <form>
                <div className="input-group input-group-sm">
                    <input type="number"
                           className="form-control"
                           placeholder="Spent time in minutes"
                           style="width: 12rem"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"><i className="fas fa-save"></i></button>
                        <button className="btn btn-outline-dark"><i className="fas fa-times false"></i></button>
                    </div>
                </div>
            </form>

            <div>
                <button className="btn btn-outline-success btn-sm mr-2">
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i></button>
            </div>
        </li>
    );
}

export default OperationItem;