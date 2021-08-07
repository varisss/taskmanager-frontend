import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Project, Member } from "../../API";

interface TaskListProps {
  projectId: String;
  tasks: string[];
  setTaskId: Function;
}

const TaskList: React.FC<TaskListProps> = ({ projectId, tasks, setTaskId }) => {
  useEffect(() => setTaskId(""), []);
  return (
    <>
      {tasks.map((task: any) => (
        <div className="card">
          <Link
            style={{ textDecoration: 'none' }}
            to={`/${projectId}/${task._id}`}
            onClick={() => {
              console.log(task._id);
              setTaskId(task._id);
            }}
          >
            <h2>{task.name}</h2>
          </Link>
          <p>{task.description}</p>
          <div className="members-container">
            {task.members.map((member: Member) => (
              <p>{member.name}</p>
            ))}
          </div>
          <div className="status-bar">{task.status}</div>
          {/* {task.updates.map((update: any) => (
            <>
              <p>{update}</p>
              <hr />
            </>
          ))} */}
        </div>
      ))}
    </>
  );
};

export default TaskList;
