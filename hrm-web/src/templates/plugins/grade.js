import PeopleIcon from '@material-ui/icons/People';
import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';

class Grade extends Component {


    state = {
        employee: {
            General_Service: {
                grade_join: 'Grade'
            }
        }
    };

    componentWillReceiveProps() {
        console.log(this);
        var employee = localStorage.getItem('employee');
        console.log(employee);
        if (employee !== undefined) {
            this.state.employee = cloneDeep(JSON.parse(employee));
        }
    }

    render() {
        const {
            employee
        } = this.state;
        return (
            employee ? employee.General_Service.grade_join : ''
        )
    }


}


export default {
    Component: Grade,
    isInlineable: true,
    IconComponent: <PeopleIcon />,
    name: 'example/content/Grade',
    version: '0.0.1',
    text: 'Grade',
    description: 'Grade '
}
