import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Member } from "../../API";

// styles
import { Wrapper } from "../ContentPart.styles";
import StatusBar from "../StatusBar";

interface TaskListProps {
  projectId: String;
  tasks: string[];
  setTaskId: Function;
}

const TaskList: React.FC<TaskListProps> = ({ projectId, tasks, setTaskId }) => {
  useEffect(() => setTaskId(""), []);
  return (
    <>
      <h2>Tasks</h2>
      {tasks.map((task: any) => (
        <div className="card">
          <Link
            style={{ textDecoration: "none" }}
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
          <StatusBar className="status-bar" status={task.status}></StatusBar>
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
