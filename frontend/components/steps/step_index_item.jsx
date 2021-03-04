import React from 'react';
import { Link } from 'react-router-dom';

const StepIndexItem = props => (
    <li className="stepindexitem">
        <div className="stepindexitem-head">
            <h2>{props.step.head}</h2>
        </div>
        <div className="stepindexitem-description">
            <p>{props.step.description}</p>
        </div>
        {/* <Link to={`/steps/${props.step.id}`}>Edit</Link> */}
        <div>
            {/* <button className="project-button" onClick={() => props.deleteStep(props.step.id)}>Delete</button> */}
        </div>
    </li>
);
 
export default StepIndexItem;