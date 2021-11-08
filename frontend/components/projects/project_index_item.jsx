import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
        <li className="projectindexcontainer">
            <div className="projectindexitem">
                <Link to={`/projects/${props.project.id}`}><img className="projectimg" src={props.project.photoUrl}/></Link>
                <Link to={`/projects/${props.project.id}`} className="projecttitle">{props.project.title}</Link>    
                <a className="projectby"> by <a>{props.project.user.username}</a></a>
            </div>
        </li>
);

export default ProjectIndexItem;