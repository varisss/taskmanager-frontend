import React, { useState, useEffect } from 'react';
import API, { Project } from '../../API';
import TaskList from '../Task/TaskList';

// Components
import Headbar from '../Headbar';
import NoContent from '../NoContent';

// Image
import BuddaMask from '../../images/budda_mask.png';

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
      console.log(t);
    };
    fetchProj();
    fetchTasks();
  }, []);
  if (project) {
    return (
      <>
        <Headbar header={project.name}/>
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
        {(tasks.length > 0)
          ? <TaskList projectId={projectId} tasks={tasks} setTaskId={setTaskId} />
          : <NoContent
            heading="Project tasks shows here"
            subheading={`There are no task in this\nproject right now`}
            image={BuddaMask} />}
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};

export default SingleProject;
