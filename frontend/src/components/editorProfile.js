import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';

class editorProfile extends Component{

    constructor(props){
        super(props)
        this.state ={
            firstName:'',
            lastName:'',
            email:''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            firstName:decoded.firstName,
            lastName:decoded.lastName,
            email:decoded.email
        })
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm8 mx-auto">
                        <h2 className="text-center">Editor Profile</h2>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <h3>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.firstName}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.lastName}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </h3>
                    </table>
                </div>

            </div>
        );
    }
}

export default editorProfile;