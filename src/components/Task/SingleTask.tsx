import React, { useState, useEffect } from 'react';
import API, { Task } from '../../API';
import { useHistory } from 'react-router';
// Styles
import Headbar from '../Headbar';
import { Wrapper } from '../ContentPart.styles';
import AddUpdate from '../AddUpdate';

interface TaskProps {
  projectId: String;
  taskId: String;
}

const SingleTask: React.FC<TaskProps> = ({ projectId, taskId }) => {
  const [task, setTask] = useState<Task>();
  const history = useHistory();
  const [isediting, setIsediting] = useState(false);

  const deleteTask = async (proj: String, task: String) => {
    try {
      await API.deleteTask(proj, task);
      history.go(-1);
      console.log('deleted');
      return;
    } catch (err) {
      console.log(err);
      return;
    }
  };

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
        {isediting ? (
          <div
            className="curtain"
            onClick={() => {
              setIsediting(false);
            }}
          />
        ) : null}
        <Wrapper>
          <Headbar header="" />
          <h1 className="task-title">{task.name}</h1>
          <div className="info-box">
            <p>{task.status}</p>
            <p>Start: {new Date(task.start).toString().slice(0, 15)}</p>
            <p>Deadline: {new Date(task.deadline).toString().slice(0, 15)}</p>
            <p>{task.description}</p>
            <h3>Responsible Members</h3>
            {task.members.map((member) => (
              <p>{member.name + ': ' + member.role}</p>
            ))}
          </div>
          <button className="update-btn" onClick={() => setIsediting(true)}>
            <p className="btn-text">Add Update</p>
          </button>
          <button
            className="delete-btn"
            onClick={async () => {
              if (window.confirm('Are you sure? This cannot be undone.')) {
                await deleteTask(projectId, taskId);
              }
            }}
          >
            <p className="btn-text">Delete Task</p>
          </button>
          <h1 className="project-title">Updates</h1>
          {task.updates.map((update: any) => (
            <div className="card">
              <p>{update.message}</p>
              <h3>Updated by: {update.member}</h3>
            </div>
          ))}
        </Wrapper>
        <AddUpdate
          projectId={projectId}
          isShow={isediting}
          taskId={taskId}
          setIsediting={setIsediting}
        />
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
