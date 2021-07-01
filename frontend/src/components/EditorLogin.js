import React, { Component } from 'react';
import { login } from './editorFunction';
import '../CSS/Login.css';

class EditorLogin extends Component{

   constructor(props){
       super(props);
       this.state={
        email:"",
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
           email:this.state.email,
           password:this.state.password
       }

       login(editor).then(res=>{
           if(res){
               this.props.history.push(`/profile`)
           }
       })
   }

    render(){
        return(
            <div className="wrappers">
            <div className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                               className=""
                               placeholder="Email"
                               name="email"
                               noValidate
                               value={this.state.email}
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
                    <div className="createLogin">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}

export default EditorLogin;