import React from "react";
import { Project } from '../../API';

interface ProjectListProps {
    projects: string[]
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => (
    <>
        {projects.map((proj: any) => (
            <div className='project'>
                <h1>{proj.name}</h1>
                <p>{proj.status}</p>
            </div>
        ))}
    </>
);

export default ProjectList;