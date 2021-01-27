import React from 'react';
import { Link } from 'react-router-dom';

const StepIndexItem = props => (
    <li className="stepindexitem">
        <Link to={`/steps/${props.step.id}`}>{props.step.head}</Link>
    </li>
);

export default StepIndexItem;