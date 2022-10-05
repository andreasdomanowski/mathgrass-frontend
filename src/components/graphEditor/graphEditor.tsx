import React, {useEffect} from 'react';
import * as joint from 'jointjs';
import {useAppSelector} from '../../state/common/hooks';
import {useDispatch} from 'react-redux';
import {propagateGraphState, requestTask, Task} from '../../state/applicationState';
import GraphFeedback from './graphFeedback';
import {generateAndDownloadFile} from '../../util/fileDownloadUtils';
import {abstractGraphToJointJsGraph} from './graphConverter';

const GRAPH_CONTAINER_ID = 'mathGrassEditor';
const EDITOR_HEIGHT: number = 600;
const outerStyle = {
    overflow: 'auto'
};

const GraphEditor = () => {
    const currentTask: Task | null = useAppSelector((state) => state.applicationStateManagement.currentTask);
    const graphUneditedOriginal = useAppSelector((state) => state.applicationStateManagement.graphUneditedOriginal);
    const showAssessmentFeedback: boolean = useAppSelector((state) => state.applicationStateManagement.showFeedbackSection);

    const dispatch = useDispatch();

    let graphEditorModel: joint.dia.Graph;
    if (currentTask !== null && currentTask.graph !== null) {
        graphEditorModel = abstractGraphToJointJsGraph(currentTask.graph, 100, 100);
        // dispatch new state on edit
        // which events should trigger this? as of now, state propagation is excessive
       /* graphEditorModel.on('change', () => {
            dispatch(propagateGraphState(graphEditorModel.toJSON()));
        });*/
    }

    useEffect(() => {
        const domContainer = document.getElementById(GRAPH_CONTAINER_ID);

        const paperWidth : number = domContainer!.offsetWidth;
        const paperHeight: number = graphEditorModel ? EDITOR_HEIGHT : 0;

        const paper: joint.dia.Paper = new joint.dia.Paper({
                el: domContainer!,
                model: graphEditorModel,
                width: paperWidth,
                height: paperHeight,
                gridSize: 1,
                cellViewNamespace: joint.shapes,
                restrictTranslate: true
            }
        );

        paper.fitToContent({
            minHeight: paperHeight,
            minWidth: paperWidth
        });

        window.addEventListener('resize', () => {
            // handle resize event
        }, true);

    });

    function GraphEditorButtons() {
        return <div>
            <div className="d-flex h-100 p-2 m-2">
                <div className="align-self-start mr-auto">
                    {/*<button className="btn btn-danger"
                            onClick={() => {
                                if(currentTaskType !== undefined){
                                    dispatch(requestTask(currentTaskType));
                            }
                            }}>Request a new task
                    </button>*/}
                </div>
                <div className="align-self-center mx-auto">
                    {}
                </div>
                <div className="align-self-end ml-auto">
                    <button className="btn btn-info"
                            onClick={() => generateAndDownloadFile(JSON.stringify(graphEditorModel), 'MathGrass-graph.json')}>Export
                        the current graph
                    </button>
                </div>
            </div>
        </div>;
    }

    function NoTaskSelectedInfo() {
        return <div>
            Please select a task.
        </div>;
    }

    return (
        <div id="outer" style={outerStyle}>
            <div id={GRAPH_CONTAINER_ID}/>

                {showAssessmentFeedback ?
                    <div className="d-flex h-100 p-2 m-2">
                        <GraphFeedback/>
                    </div>: null}
            {graphUneditedOriginal ? GraphEditorButtons() : NoTaskSelectedInfo()}
        </div>);
};

export default GraphEditor;
