import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import Button from 'react-bootstrap/Button';
class PersonInputFormComponent extends Component{
  state = {
    fields: {
      lastname: '',
      firstname: '',
      gender: '',
      height: 0
    }
  }
  handleFormSubmit = (event) => {
    this.props.handleCreatePerson(this.state.fields)
    PubSub.publish("PEOPLE", "Created Person")
    PubSub.publish("Javacream.People", {...this.state.fields})
    this.props.history.push('/people')
    event.preventDefault();
  }
  handleChange = (event) => {
    let target = event.target
    let result = this.state.fields
    result[target.name] = target.value
    this.setState({fields: result})
    
  }
  render(){
    return (
      <>
      <input placeholder="Lastname" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange}></input>
      <input placeholder="Firstname" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange}></input>
      <input placeholder="m|f|x" name="gender" value={this.state.fields.gender} onChange={this.handleChange}></input>
      <input placeholder="123" name="height" value={this.state.fields.height} onChange={this.handleChange}></input>
      <Button variant="info" onClick={this.handleFormSubmit}>Create</Button>
      </>
    )
  }

}

export default PersonInputFormComponent