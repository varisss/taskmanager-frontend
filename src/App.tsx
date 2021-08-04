import React from 'react';
// Routing
// @ts-ignore
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import Home from './components/Home';
import Notfound from './components/Notfound';

const App: React.FC = () => (
    <Router>
        <Switch>
            <Route path='/'>
                <Home />
            </Route>
            <Route path='/*'>
                <Notfound />
            </Route>
        </Switch>
    </Router>
);

export default App;