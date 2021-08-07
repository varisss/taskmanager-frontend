import React, { useState, useEffect } from "react";
import API, { Task } from "../../API";
// Styles
import Headbar from "../Headbar";
import { Wrapper } from "../ContentPart.styles";

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
      <Wrapper>
        <Headbar header="" />
        <h1 className="task-title">{task.name}</h1>
        <div className="info-box">
          <p>{task.status}</p>
          <p>{new Date(task.start).toString().slice(0, 15)}</p>
          <p>{task.description}</p>
          <ul>
            {task.members.map((member) => (
              <li>{member.name + ": " + member.role}</li>
            ))}
          </ul>
          <hr />
          <ul>
            {task.updates.map((update) => (
              <li>{update}</li>
            ))}
          </ul>
        </div>
      </Wrapper>
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
