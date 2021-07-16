import React, { Component } from 'react'
import { signUp } from '../../actions/authActions'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)   //Now this state has been called for signUp 
  }
  render() {
    const { auth, authError }=this.props  //The auth is coming from an action creater which is not of this compoenent
    if(auth.uid)
    return <Redirect to='/' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id='firstname' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id='lastname' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn orange lighten-1 z-depth-0">Login</button>
          </div>
          <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
            </div>
        </form>
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  return{
  auth: state.firebase.auth , //If this have UID then logged in else logged Out 
  authError: state.auth.authError
  }
}   //This thing is for redirecting now

const mapDispatchToProps = (dispatch) =>{
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)