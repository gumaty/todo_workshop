function AddOperation() {
    return (
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
    );
}

export default AddOperation;