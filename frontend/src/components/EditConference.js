import React, { Component } from 'react';
import axios from 'axios';
import { response } from 'express';

export default class EditConference extends Component{

    constructor(props){
        super(props);
        
        this.onChangeGuest = this.onChangeGuest.bind(this);
        this.onChangeTime = this.onChangeTime.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            guestSpeaker:"",
            time:"",
            description:"",
            date:""
        };
    }

    componentDidMount(){
        axios.get(`http://localhost:8070/conference/get/${this.props.match.params.id}`)
        .then(response=>{
            this.setState({
                guestSpeaker:response.data.guestSpeaker,
                time:response.data.time,
                description:response.data.description,
                date:response.data.date
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }

    onChangeGuest(e){
        this.setState({
            guestSpeaker:e.target.value
        });
    }

    onChangeTime(e){
        this.setState({
            time:e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description:e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            guestSpeaker:this.state.guestSpeaker,
            time:this.state.time,
            description:this.state.description,
            date:this.state.date
        };
        axios.post(`http://localhost:8070/conference/update/${this.props.match.params.id,obj}`)
        .then(res=>{
            console.log(res.data)
        });
        this.props.history.push(`/list`);

    }

    render(){
        return(
            <div className="container">
                <h1>Edit Conference Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="guestSpeaker" className="form-label">Guest Speaker</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="guestSpeaker" 
                        name="guestSpeaker"
                        value={this.state.guestSpeaker}
                        onChange={this.onChangeGuest}/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="time" class="form-label">Time</label>
                        <input 
                        type="time" 
                        className="form-control" 
                        id="time" 
                        name="time"
                        value={this.state.time}
                        onChange={this.onChangeTime}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea 
                        class="form-control" 
                        id="description" rows="3"
                        name="description" 
                        value={this.state.description}
                        onChange={this.onChangeDescription}>
                        </textarea>
                    </div>  
                    <div class="mb-3">
                        <label htmlFor="date" class="form-label">Date</label>
                        <input 
                        type="date" 
                        className="form-control" 
                        id="date" 
                        name="date"
                        value={this.state.date}
                        onChange={this.onChangeDate}/>
                    </div>      
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}