import React, { useState, useEffect } from 'react';
import API, { Project } from '../../API';
import TaskList from '../Task/TaskList';

interface ProjectProps {
  projectId: String;
  setTaskId: Function;
}

const initialState: any = [];

const SingleProject: React.FC<ProjectProps> = ({ projectId, setTaskId }) => {
  const [project, setProject] = useState<Project>();
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    const fetchProj = async () => {
      const proj: Project = await API.fetchProject(projectId);
      console.log(proj);
      setProject(proj);
    };
    const fetchTasks = async () => {
      const t: any = await API.fetchTasks(projectId);
      setTasks(t);
    };
    fetchProj();
    fetchTasks();
  }, []);
  if(project) {
    return (
      <>
        <h1 className="main-title">{project.name}</h1>
        <div className="project">
          <h3>{project.status}</h3>
          <h3>{project.start}</h3>
          <p>{project.description}</p>
          <ul>
            {project.members.map((member) => (
              <li>{member.name + ": " + member.role}</li>
            ))}
          </ul>
        </div>
        <TaskList projectId={projectId} tasks={tasks} setTaskId={setTaskId} />
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default SingleProject;
