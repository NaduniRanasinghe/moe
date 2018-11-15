import cloneDeep from 'clone-deep';
import { actions } from 'ory-editor-core/lib/actions';
import React, { Component } from 'react';
import data from './../../data';
import { func } from 'prop-types';

class Workingplace extends Component {


    constructor(props) {
        super(props)
        this.state = {
            placement: {
                work_place_id: 'Work Place',
                service_sector: 'Service Sector'

            }
        };
    }


    componentWillMount() {
        console.log(this);
        var placement = localStorage.getItem('placement');
        console.log(placement);
        if (placement !== null) {
            this.state.placement = cloneDeep(JSON.parse(placement));
        }
    }


    filterPlaces(sectorData) {
        return sectorData.filter(function (data) {
            var placement = localStorage.getItem('placement');
            return data.id = JSON.parse(placement).id
        })
    }

    renderSwitch(service_sector) {
        console.log(service_sector);
        switch (service_sector) {
            case 'sleas':
                return this.filterPlaces(data.working_places.sleas)[0].name
            case 'sltes':
                return this.filterPlaces(data.working_places.sltes)[0].name
            case 'cs':
                return this.filterPlaces(data.working_places.cs)[0].name
            case 'slps':
                //TODO : school name from the db;
            case 'slts':
                //TODO : school from name   
            case 'ncs':
                return this.filterPlaces(data.working_places.ncs)[0].name
            default:
                return 'Service Sector Invalid';
        }

    }


    render() {
        return (
            typeof (this.state.placement.work_place_id) == 'number' ? this.renderSwitch(this.state.placement.service_sector) : this.state.placement.work_place_id

        )
    }


}


export default {
    Component: Workingplace,
    isInlineable: true,
    name: 'example/content/Workingplace',
    version: '0.0.1',
    text: 'Working Place',
    description: 'Working Place'
}
