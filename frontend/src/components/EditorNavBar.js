import React, { Component } from 'react';
import {Link,withRouter} from 'react-router-dom';

class EditorNavBar extends Component{

    logOut(e){
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/')
    }

    render(){
        const loginRegLink = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        <h2><img src="https://img.icons8.com/color/48/000000/login-rounded-right.png"/>Login</h2>
                    </Link>
                </li>
                <li className="nav nav-tabs">
                    <Link to="/register" className="nav-link">
                        <h2><img src="https://img.icons8.com/ios-glyphs/30/000000/edit-user-male.png"/>Register</h2>
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        <h2><img src="https://img.icons8.com/color/48/000000/conference-foreground-selected.png"/>User Profile</h2>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/add-details" className="nav-link">
                        <h2><img src="https://img.icons8.com/color/48/000000/add-property.png"/>Add Conference</h2>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/list" className="nav-link">
                        <h2><img src="https://img.icons8.com/color/48/000000/view-details.png"/>Conference details</h2>
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        <h2><img src="https://img.icons8.com/color/48/000000/exit.png"/>LogOut</h2>
                    </a>
                </li>
            </ul>
        )
        return(
            <nav className="navbar navbar-expand-lg navbar-light rounded">
                <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbar1"
                aria-controls="#navbar1"
                aria-expanded="false"
                aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <h2><img src="https://img.icons8.com/color/48/000000/home.png"/>Home</h2>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink:loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(EditorNavBar);
