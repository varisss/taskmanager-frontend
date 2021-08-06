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
          <h3>{task.status}</h3>
          <h3>{new Date(task.start).toString().slice(0, 15)}</h3>
          <p>{task.description}</p>
          <ul>
            {task.members.map((member) => (
              <li>{member.name}</li>
            ))}
          </ul>
          <hr />
          <ul>
            {task.updates.map((update) => (
              <li>{update}</li>
            ))}
          </ul>
        </div>
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
