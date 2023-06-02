import React from "react";

function OperationItem({operation}) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {operation.description}
                {operation.timeSpent > 0 && (<span className="badge badge-success badge-pill ml-2">{(operation.timeSpent/60).toFixed(0)}h {(operation.timeSpent%60)}min</span>)}


            </div>



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