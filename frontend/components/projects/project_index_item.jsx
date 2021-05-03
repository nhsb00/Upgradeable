import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
        <li className="projectindexcontainer">
            <div className="projectindexitem">
                <Link to={`/projects/${props.project.id}`}><img className="projectimg" src={props.project.photoUrl}/></Link>
                <Link to={`/projects/${props.project.id}`}>{props.project.title}</Link>
                <p>by {props.project.user.username }</p>
            </div>
        </li>
);

export default ProjectIndexItem;