import React from "react";
import { Project } from '../../API';

interface ProjectProps {
    project: Project
}

const SingleProject: React.FC<ProjectProps> = ({ project }) => (
    <div>
        <h1>{project.name}</h1>
        <h3>{project.status}</h3>
        {/* <h3>{project.start}</h3> */}
        <p>{project.description}</p>
        <ul>
            {project.members.map(member => (
                <li>member</li>
            ))}
        </ul>
        <ul>
            {project.tasks.map(task => (
                <li>{task}</li>
            ))}
        </ul>
    </div>
);

export default SingleProject;