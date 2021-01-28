import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
        <li className="projectindexitem">
            {/* <Link to={`/projects/${props.project.id}`}>{props.project.img}</Link> */}
            <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
            <Link to={`/projects/${props.project.id}`}>{props.project.body}</Link>
            <p>by { props.project.username }</p>
        </li>
);

export default ProjectIndexItem;