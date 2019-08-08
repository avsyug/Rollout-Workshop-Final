import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService';
import Flags from '../flags.js';

const INSTRUCTOR = 'in28minutes'

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refreshCourses()
                }
            )

    }

    addCourseClicked() {
        this.props.history.push(`/courses/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/courses/${id}`)
    }

    render() {
        console.log('render')
        const multiFlag = Flags.multiFlag.isEnabled();
        const adminFlag = Flags.adminControl.isEnabled();
            return (
                <div className="container">
                    <h3>All Courses</h3>
                    {this.state.message && <div class="alert alert-success">{this.state.message}</div>}
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    { adminFlag ?
                                        <th>Update</th>
                                    : 
                                        <th>View</th> 
                                    }
                                    { multiFlag ?
                                        <th>Delete</th>
                                    : null }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.courses.map(
                                        course =>
                                            <tr key={course.id}>
                                                <td>{course.id}</td>
                                                <td>{course.description}</td>
                                                { adminFlag ?
                                                    <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>Update</button></td>
                                                : 
                                                    <td><button className="btn btn-success" onClick={() => this.updateCourseClicked(course.id)}>View</button></td>
                                                }
                                                { multiFlag ?
                                                    <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(course.id)}>Delete</button></td>
                                                : 
                                                    null 
                                                }
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        { adminFlag ?
                        <div className="row">
                            <button className="btn btn-success" onClick={this.addCourseClicked}>Add</button>
                        </div>
                        : null }
                    </div>
                </div>
            )


    }
}

export default ListCoursesComponent
