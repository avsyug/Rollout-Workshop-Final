import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Button, Navbar } from 'react-bootstrap';
import CourseComponent from './CourseComponent';
import Flags from '../flags.js';
import Rox from 'rox-browser';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <Navbar bg="light">
                        <Navbar.Brand href="../courses">Instruction Application Tutorial</Navbar.Brand>
                        <Navbar.Brand>
                            <button className="btn btn-flags" onClick={() => Rox.showOverrides('bottom left')}>Flags View</button>
                        </Navbar.Brand>
                    </Navbar>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp