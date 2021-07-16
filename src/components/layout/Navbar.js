import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'                 
const Navbar = (props) => {
    const { auth, profile }=props
    console.log(auth)
    const links= auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />
    return (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo left">FireWeb</Link>
          { links }
        </div>
        
        
    </nav>
    );
}

const mapStateToProps = (state) =>{
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}
export default connect(mapStateToProps)(Navbar);   //Connect will simply connect to redux and then mapStatetoProps will take the take the state we wanted from reducer and then update it in thus component 