import React, { useState } from 'react';
import './App.css';
// Routing
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Notfound from './components/Notfound';
import SingleProject from './components/Project/SingleProject';
import CreateProject from './components/CreateProject';

const App: React.FC = () => {
    const [projectId, setProjectId] = useState('test12345');
    // project id will be set when the user clicks on a project
    // in the project list

    // SingleProduct will probably take in the project id
    // then make an api call to get the project, then render it

    // 

    return (
        <Router>
            <Switch>
                <Route exact path="/create-project">
                    <CreateProject />
                </Route>
                <Route exact path={`/:${projectId}`}>
                    <SingleProject project={{
                        _id: 'Test',
                        name: 'Test',
                        description: 'Test',
                        start: new Date(Date.now()),
                        status: 'Test',
                        members: ['a', 'b'],
                        tasks: ['1', '2'],
                    }} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path='/*'>
                    <Notfound />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;