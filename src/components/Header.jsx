import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useAuth} from '../utils/AuthContext'

function Header() {

  const {user, logoutUser}  = useAuth()


  return (
    <div className="header">
      <div>
            <Link id="header-logo" to="/">Client M-App</Link>
        </div>
      <div className="links--wrapper">
        
        { user ?
        <>
        <Link className="header--link" to="/">Home</Link>
         <Link className="header--link" to="/profile">Profile</Link>
         <button onClick={logoutUser} className="btn">Logout</button>
         </> :
          <Link className="header--link" to="/login">Login</Link>
        }
      </div>
    </div>
  )
}

export default Header