import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../actions/projectActions'
import { Redirect } from 'react-router-dom'

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
    authorFirstName: '',
    authorLastName: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/')
  }

  
  render() {
    const { auth }=this.props;
    if(!auth.uid)
    return  <Redirect to='/signin'> </Redirect>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Project</h5>
          <div className="input-field">
            <input type="text" id='title' required onChange={this.handleChange} />
            <label htmlFor="title">Project Title</label>
          </div>
          <div className="input-field">
            <textarea id="content" required className="materialize-textarea" onChange={this.handleChange}></textarea>
            <label htmlFor="content">Project Content</label>
          </div>

          <div className="input-field">
            <input type="text" id='authorFirstName' required onChange={this.handleChange} />
            <label htmlFor="authorFirstName">Author First Name</label>
          </div>

          <div className="input-field">
            <input type="text" id='authorLastName' required onChange={this.handleChange} />
            <label htmlFor="authorLastName">Author Last Name</label>
          </div>
          <div className="input-field">
            <button className="btn orange lighten-1">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
  auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))    //So whenever we press the button then it will go to createProject function as an parameter in projectAction
  }
}

export default 
  connect(mapStateToProps, mapDispatchToProps)(CreateProject)
  