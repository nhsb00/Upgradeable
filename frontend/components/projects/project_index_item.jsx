import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = props => (
        <li className="projectindexcontainer">
            <div className="projectindexitem">
                <Link to={`/projects/${props.project.id}`}><img className="projectimg" src={props.project.photoUrl}/></Link>
            <Link to={`/projects/${props.project.id}`} className="projecttitle">{props.project.title}<a className="projectby"> by <a>{props.project.user.username}</a></a></Link>
                
            </div>
        </li>
);

export default ProjectIndexItem;