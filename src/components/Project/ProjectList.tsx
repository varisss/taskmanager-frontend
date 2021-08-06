import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectListProps {
  projects: string[];
  setProjectId: Function;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  setProjectId,
}) => (
  <>
    {projects.map((proj: any) => (
      <div className="project">
        <Link
          to={`/${proj._id}`}
          onClick={() => {
            console.log(proj._id);
            setProjectId(proj._id);
          }}
        >
          <h1>{proj.name}</h1>
        </Link>
        <p>{proj.status}</p>
      </div>
    ))}
  </>
);

export default ProjectList;
