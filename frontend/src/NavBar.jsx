import React from 'react';
import './css/Home.css';
import {Link} from "react-router-dom";
export default class Home extends React.Component {

    render() {
        return(
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-dark">
                    <div className="container">
                    <a className="navbar-brand" href="#">Welcome to International Conference on Application Frameworks [ICAF]</a>
                    </div>
                </nav>
                
            </div>
        );
    }
};