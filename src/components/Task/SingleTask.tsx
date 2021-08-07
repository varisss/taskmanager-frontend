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
      <>
        <Headbar header="" />
        <Wrapper>
          <h1 className="task-title">{task.name}</h1>
          <div className="info-box">
            <h3>{task.status}</h3>
            <h3>Start: {new Date(task.start).toString().slice(0, 15)}</h3>
            <h3>Deadline: {new Date(task.deadline).toString().slice(0, 15)}</h3>
            <p>{task.description}</p>
            <h3>Responsible Members</h3>
            {task.members.map((member) => (
              <p>{member.name + ": " + member.role}</p>
            ))}
          </div>
          <h1 className="project-title">Updates</h1>
          {task.updates.map((update) => (
            <div className="card">
              <h2>{update}</h2>
              <p>Description here...</p>
              <p>Updated by ...</p>
            </div>
          ))}
        </Wrapper>
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
