import React, { Component } from 'react';
import TableRow from './TableRow';
import axios from 'axios';

export default class ConferenceDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            conference:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8070/conference')
        .then(response =>{
           this.setState({conference:response.data})
        })
        .catch(function(error){
            console.log(error);
        })
    }
    tabRow(){
        return this.state.conference.map(function(object,i){
            return <TableRow obj={object} key={i} />;
        });
    }


    render(){
        return(
            <div>
                <h3 align="center">Conference List</h3>
                <table className="table table-stripped" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Guest Speaker</th>
                            <th>Time</th>
                            <th>Description</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>

            </div>
        );
    }
}