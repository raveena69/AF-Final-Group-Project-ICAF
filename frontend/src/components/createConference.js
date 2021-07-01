import React, { Component } from 'react';
import axios from 'axios';
import '../CSS/Conf.css';

const initialState = {
    guestSpeaker:'',
    time:'',
    description:'',
    date:''
}

class createConference extends Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value})

    }

    onSubmit(e){
        e.preventDefault();
        let conference = {
            guestSpeaker:this.state.guestSpeaker,
            time:this.state.time,
            description:this.state.description,
            date:this.state.date
        }
        axios.post('conference/add',conference)
        .then(response =>{
            alert('Data successfully inserted')
        })
        .catch(error =>{
            console.log(error.message);
            alert(error.message)
        })

    }
    render(){
        return(
            <div className="wrapper">
            <div className="form-wrapper">
                <h1>Conference Form</h1>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="guestSpeaker">
                        <label htmlFor="guestSpeaker">Guest Speaker</label>
                        <input type="text"
                               className=""
                               placeholder="Guest Speaker"
                               name="guestSpeaker"
                               noValidate
                               value={this.state.guestSpeaker}
                               onChange={this.onChange}/>
                    </div>
                    <div className="time">
                        <label htmlFor="time">Time</label>
                        <input type="time"
                               className=""
                               placeholder="Time"
                               name="time" noValidate
                               value={this.state.time}
                               onChange={this.onChange}/>
                    </div>
                    <div className="description">
                        <label htmlFor="description">Description</label>
                        <textarea
                               className=""
                               placeholder="Description"
                               name="description" noValidate
                               value={this.state.description}
                               onChange={this.onChange}/>
                    </div>
                    <div className="date">
                        <label htmlFor="date">Date</label>
                        <input type="date"
                               className=""
                               placeholder="Date"
                               name="date" noValidate
                               value={this.state.date}
                               onChange={this.onChange}/>
                    </div>

                    <div className="create">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        )
        
    }

}

export default createConference;