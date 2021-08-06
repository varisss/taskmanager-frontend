import React, { useState, useEffect } from 'react';
import API, { Task } from '../../API';

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
        <h1 className="main-title">{task.name}</h1>
        <div className="project">
          <h3>{task.status}</h3>
          {/* <h3>{task.start.toString()}</h3> */}
          <p>{task.description}</p>
          <ul>
            {task.members.map((member) => (
              <li>{member}</li>
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
    return <h1>Loading</h1>;
  }
};

export default SingleTask;
