import React, {useState} from "react";

function OperationItem({operation}) {

    const [isAddClicked, setIsAddClicked] =useState(false);
    const [isCancelClicked, setIsCancelClicked] =useState(true);


    function changeFormVisibility(event){
        event.preventDefault();
        if (isAddClicked === false) {
            setIsAddClicked(true);
            setIsCancelClicked(false);
        } else {
            setIsAddClicked(false);
            setIsCancelClicked(true);
        }
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {operation.description}
                {operation.timeSpent > 0 && (<span className="badge badge-success badge-pill ml-2">{Math.floor(operation.timeSpent/60)}h {(operation.timeSpent%60)}min</span>)}
            </div>

            { isAddClicked && (
                <form>
                    <div className="input-group input-group-sm">
                        <input type="number"
                               className="form-control"
                               placeholder="Spent time in minutes"
                               style={{width: "12rem"}}/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-success"><i className="fas fa-save"></i></button>
                            <button onClick={changeFormVisibility} className="btn btn-outline-dark"><i className="fas fa-times false"></i></button>
                        </div>
                    </div>
                </form>
            ) }


            { isCancelClicked && (
            <div>
                <button onClick={changeFormVisibility} className="btn btn-outline-success btn-sm mr-2">
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button>
                <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i></button>
            </div>
                )}
        </li>
    );
}

export default OperationItem;