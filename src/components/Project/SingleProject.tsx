import React, { useState, useEffect } from 'react';
import API, { Project } from '../../API';

interface ProjectProps {
  projectId: String;
}

const SingleProject: React.FC<ProjectProps> = ({ projectId }) => {
  const [project, setProject] = useState<Project>();
  useEffect(() => {
    const fetchProject = async () => {
      const proj: any = await API.fetchProject(projectId);
      setProject(proj);
    };
    fetchProject();
  }, []);
  if (project) {
    return (
      <>
        <h1 className="main-title">{project.name}</h1>
        <div className="project">
          <h3>{project.status}</h3>
          {/* <h3>{project.start}</h3> */}
          <p>{project.description}</p>
          <ul>
            {project.members.map((member) => (
              <li>{member}</li>
            ))}
          </ul>
          <ul>
            {project.tasks.map((task) => (
              <li>{task}</li>
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default SingleProject;
