import React from 'react';
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Router() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route component={About} path="/about"/>
                    <Route component={Home} path="/"/>
                </Switch>
            </BrowserRouter>
    )
}