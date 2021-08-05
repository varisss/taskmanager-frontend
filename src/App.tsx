import React, { useState } from 'react';
import './App.css';
// Routing
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Notfound from './components/Notfound';
import Headbar from './components/Headbar';
import SingleProject from './components/Project/SingleProject';

const App: React.FC = () => {
  const [projectId, setProjectId] = useState('');
  console.log(projectId);
  // project id will be set when the user clicks on a project
  // in the project list

  // SingleProduct will probably take in the project id
  // then make an api call to get the project, then render it

  return (
    <Router>
      <Headbar header="dreamteam101" />
      <Switch>
        <Route exact path="/">
          <Home setProjectId={setProjectId} />
        </Route>
        <Route exact path={`/${projectId}`}>
          <SingleProject projectId={projectId} />
        </Route>
        <Route exact path="/*">
          <Notfound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
