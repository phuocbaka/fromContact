import React, {Component} from 'react';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {textData:""};
        this.state = {emailData:""};
        this.state = {numberData:""};
        this.state = {areaData:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            textData: event.target.textData,
            mailData: event.target.mailData,
            phoneData: event.target.phoneData,
            areaData: event.target.areaData
        });
    }
    handleSubmit(event) {
        alert('A name was submitted:' + this.state.textData);
        event.preventDefault();
      }
    render() {
        return(
            <div className="input-group">
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type="text" value = {this.state.textData} onChange={this.handleChange} 
                    name="name" />
                </label>
                <label>
                    Mail
                    <input type="email" value = {this.state.emailData} onChange={this.handleChange} 
                    name="mail" />
                </label>
                <label>
                    Phone
                    <input type="number" value = {this.state.phoneData} onChange={this.handleChange} 
                    name="phone" />
                </label>
                <label>
                    Essay
                    <textarea type="text" value={this.state.areaData} onChange={this.handleChange} name="textarea"/>
                </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Contact;