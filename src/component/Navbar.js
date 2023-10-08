import React from 'react'
// import { Link } from 'react-router-dom'
import { ReactPropTypes } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [Switch,setSwitch]=useState("Dark Mode")
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/" activeClassName="active">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active" activeClassName="active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about" activeClassName="active" aria-current="page" >{props.Abouttext}</Link>
          </li>
        </ul>
        {/* <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        {/* <div>
          <div className='bg-primary rounded mx-3' onClick={()=>{props.Toggleevent('primary')}}  style={{height:'25px',width:'25px'}}></div>
        </div>
        <div>
          <div className='bg-warning rounded mx-3' onClick={()=>{props.Toggleevent('warning')}} style={{height:'25px',width:'25px'}}></div>
        </div>
        <div>
          <div className='bg-danger rounded mx-3' onClick={()=>{props.Toggleevent('danger')}} style={{height:'25px',width:'25px'}}></div>
        </div>
        <div>
          <div className='bg-success rounded mx-3' onClick={()=>{props.Toggleevent('success')}} style={{height:'25px',width:'25px'}}></div>
        </div> */}
          <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.Toggleevent}/>
          <label className="form-check-label" for="flexSwitchCheckDefault">Toggle Mode</label>
        </div>
        
      </div>
    </div>
  </nav>
  )
}
