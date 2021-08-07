import React, { useState, useEffect } from 'react';
import API, { Task } from '../../API';
import Headbar from '../Headbar';

interface TaskProps {
  projectId: String;
  taskId: String;
}

const SingleTask: React.FC<TaskProps> = ({ projectId, taskId }) => {
  const [task, setTask] = useState<Task>();
  useEffect(() => {
    const fetchTask = async () => {
      const t: any = await API.fetchTask(projectId, taskId);
      setTask(t);
    };
    fetchTask();
  }, []);
  if (task) {
    return (
      <>
        <Headbar header="" />
        <h1 className="task-title">{task.name}</h1>
        <div className="project">
          <h3>Status: {task.status}</h3>
          <h3>Started On: {new Date(task.start).toString().slice(0, 15)}</h3>
          <p>{task.description}</p>
          <h3>Responsible Members</h3>
          {task.members.map((member) => (
            <p>{member.name + ': ' + member.role}</p>
          ))}
        </div>
        <h1 className="project-title">Updates</h1>
        {task.updates.map((update) => (
          <div className="project">
            <h2>{update}</h2>
            <p>Description here...</p>
            <p>Updated by ...</p>
          </div>
        ))}
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

export default SingleTask;
