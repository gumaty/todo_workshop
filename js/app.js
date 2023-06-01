import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (

      <>
        <div className="card shadow">
          <div className="card-body">
            <h1 className="card-title">New task</h1>
            <form>
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       name="title"
                       placeholder="Title"/>
              </div>
              <div className="form-group">
                <input type="text"
                       className="form-control"
                       name="description"
                       placeholder="Description"/>
              </div>
              <button className="btn btn-info">
                Add task
                <i className="fas fa-plus-circle ml-1"></i>
              </button>
            </form>
          </div>
        </div>

        <section className="card mt-5 shadow-sm">
          <div className="card-header d-flex justify-content-between align-items-center">
            <div>
              <h5>Tytuł zadania</h5>
              <h6 className="card-subtitle text-muted">Opis zadania</h6>
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
              <button className="btn btn-outline-danger btn-sm ml-2">
                <i className="fas fa-trash false"></i>
              </button>
            </div>
          </div>
        </section>
      </>

  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
