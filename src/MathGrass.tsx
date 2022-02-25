import React from 'react';
import GraphEditor from "./Components/GraphEditor/GraphEditor";
import Assessment from "./Components/Assessment/Assessment";
import IncrementalHints from "./Components/IncrementalHints/IncrementalHints";
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskManagement from "./Components/TaskManagement/TaskManagement";

class MathGrass extends React.Component {
    render() {
        return (
            <div className="m-2">
                <div className="row">
                    <div className="col-md-9 mb-1">
                        <div className="card">
                            <div className="card-header">
                                <h2>Graph</h2>
                            </div>
                            <div className="card-body">
                                <GraphEditor/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-1">
                        <div className="row">
                            <div className="col-md-12 mb-1">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Tasks</h2>
                                    </div>
                                    <div className="card-body">
                                        <TaskManagement />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-1">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Assessment</h2>
                                    </div>
                                    <div className="card-body">
                                        <Assessment/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-1">
                                <div className="card">
                                    <div className="card-header">
                                        <h2>Hints</h2>
                                    </div>
                                    <div className="card-body">
                                        <IncrementalHints/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        );
    }
}

export default MathGrass;


