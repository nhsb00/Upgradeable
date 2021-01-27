import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
        <li className="projectindexitem">
            <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
        </li>
);

export default ProjectIndexItem;