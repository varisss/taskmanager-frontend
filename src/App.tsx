import React, { useState, useEffect } from 'react';
import './App.css';
// Types
import { Member } from './API';

// Routing
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Notfound from './components/Notfound';
import SingleProject from './components/Project/SingleProject';
import CreateProject from './components/CreateProject';
import SingleTask from './components/Task/SingleTask';
import CreateTask from './components/CreateTask';

const memberlist = [
  { name: 'Too', role: 'Project Manager' },
  { name: 'Earthi', role: 'UX/UI designer' },
  { name: 'Kaoklong', role: 'Frontend Developer' },
  { name: 'Pae', role: 'Fontend Developer' },
  { name: 'team', role: 'Backend Developer' },
];

function useStickyState(defaultValue: string, key: string) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

const App: React.FC = () => {
  const [projectId, setProjectId] = useStickyState('', 'projectId');
  const [taskId, setTaskId] = useStickyState('', 'taskId');
  console.log(projectId);
  console.log(taskId);
  // project id will be set when the user clicks on a project
  // in the project list

  // SingleProduct will probably take in the project id
  // then make an api call to get the project, then render it

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home setProjectId={setProjectId} />
        </Route>
        <Route exact path={`/${projectId}`}>
          <SingleProject projectId={projectId} setTaskId={setTaskId} />
        </Route>
        <Route exact path={`/${projectId}/${taskId}`}>
          <SingleTask projectId={projectId} taskId={taskId} />
        </Route>
        <Route exact path="/create-project">
          <CreateProject members={memberlist as Member[]} />
        </Route>
        <Route path={`/${projectId}/create-task`}>
          <CreateTask members={memberlist as Member[]} projectId={projectId} />
        </Route>
        <Route exact path="/*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
