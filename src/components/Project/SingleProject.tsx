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
      console.log(t);
      setTasks(t);
    };
    fetchProj();
    fetchTasks();
  }, []);
  if (project) {
    return (
      <>
        <Headbar header={project.name} />
        <h1 className="project-title">Project Info</h1>
        <div className="project">
          <h3>Status: {project.status}</h3>
          <h3>Started On: {new Date(project.start).toString().slice(0, 15)}</h3>
          <p>{project.description}</p>
          {/* <h3>Project Members</h3>
          {project.members.map((member) => (
            <p>{member.name + ': ' + member.role}</p>
          ))} */}
        </div>
        {tasks.length > 0 ? (
          <>
            <h1 className="project-title">Tasks</h1>
            <TaskList
              projectId={projectId}
              tasks={tasks}
              setTaskId={setTaskId}
            />
          </>
        ) : (
          <NoContent
            heading="Project tasks show here"
            subheading={`There are no tasks in this project right now`}
            image={BuddaMask}
          />
        )}
      </>
    );
  } else {
    return (
      <div className="loading">
        <h1>Loading</h1>
      </div>
    );
  }
};

export default SingleProject;
