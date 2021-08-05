import React, { useState } from 'react';
import './App.css';
// Routing
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Notfound from './components/Notfound';
import Headbar from './components/Headbar/Headbar';
import Project from './components/Project/Project';

const App: React.FC = () => {
    const [projectId, setProjectId] = useState('');

    return (
        <Router>
            <Headbar />
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
                <Route path={`/${projectId}`}>
                    <Project />
                </Route>
                <Route path='/*'>
                    <Notfound />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;