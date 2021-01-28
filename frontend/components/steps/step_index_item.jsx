import React from 'react';
import { Link } from 'react-router-dom';

const StepIndexItem = props => (
    <li className="stepindexitem">
        <p>StepIndexItems</p>
        <p>{props.step.head}</p>
        <p>{props.step.description}</p>
        <Link to={`/steps/${props.step.id}`}>Edit</Link>
        <button onClick={() => props.deleteStep(props.step.id)}>Delete</button>
    </li>
);

export default StepIndexItem;