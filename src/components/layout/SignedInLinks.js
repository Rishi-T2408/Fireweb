import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {signout} from '../../actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        
        <li><NavLink to='/' >Settings
          </NavLink></li>
          <li><a onClick={props.signout} className="btn waves-effect orange">Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signout: () => dispatch(signout())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)