import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/Home/Home';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/register' exact component={Register} />
                <Route path='/home' exact component={Home} />
            </Switch>
        </Router>
    )
}