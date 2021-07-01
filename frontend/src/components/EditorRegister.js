import React, { Component } from 'react';
import { register } from './editorFunction';
import '../CSS/Register.css';

class EditorRegister extends Component{

   constructor(props){
       super(props);
       this.state={
        firstName:"",
        lastName:"",
        email:"",
        username:"",
        password:""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
   }

   onChange(e){
       this.setState({[e.target.name]:e.target.value})
   }

   onSubmit(e){
       e.preventDefault()
       const editor ={
           firstName:this.state.firstName,
           lastName:this.state.lastName,
           email:this.state.email,
           username:this.state.username,
           password:this.state.password
       }

       register(editor).then(res=>{
           if(res){
               this.props.history.push(`/login`)
           }
       })
   }

    render(){
        return(
            <div className="wrapper">
            <div className="form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text"
                               className=""
                               placeholder="First Name"
                               name="firstName"
                               noValidate
                               value={this.state.firstName}
                               onChange={this.onChange}/>
                    </div>
                    <div className="lastName">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text"
                               className=""
                               placeholder="Last Name"
                               name="lastName" noValidate
                               value={this.state.lastName}
                               onChange={this.onChange}/>
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               className=""
                               placeholder="Email"
                               name="email" noValidate
                               value={this.state.email}
                               onChange={this.onChange}/>
                    </div>
                    <div className="username">
                        <label htmlFor="username">User Name</label>
                        <input type="text"
                               className=""
                               placeholder="username"
                               name="username" noValidate
                               value={this.state.username}
                               onChange={this.onChange}/>
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className=""
                               placeholder="Password"
                               name="password" noValidate
                               value={this.state.password}
                               onChange={this.onChange}/>
                    </div>

                    <div className="createAccount">
                        <button type="submit">Create Account</button>
                        <small>Already have an account?</small>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default EditorRegister;