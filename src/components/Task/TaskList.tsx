import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../API';

interface TaskListProps {
  projectId: String;
  tasks: string[];
  setTaskId: Function;
}

const TaskList: React.FC<TaskListProps> = ({ projectId, tasks, setTaskId }) => {
  useEffect(() => setTaskId(''), []);
  return (
    <>
      {tasks.map((task: any) => (
        <div className="project">
          <Link
            to={`/${projectId}/${task._id}`}
            onClick={() => {
              console.log(task._id);
              setTaskId(task._id);
            }}
          >
            <h1>{task.name}</h1>
          </Link>
          <p>{task.status}</p>
          {task.updates.map((update: any) => (
            <>
              <p>{update}</p>
              <hr />
            </>
          ))}
        </div>
      ))}
    </>
  );
};

export default TaskList;
