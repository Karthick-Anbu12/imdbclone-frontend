import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import context from './Context'
import Logout from './Logout'
function Navbar() {
  const { isloggedin } = useContext(context)
  return (
    <div className='fluid'>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand bg-warning m-2 p-1 rounded fs-4 text-dark fw-bold" href="#">IMDb</a>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link text-white fs-6" to='/' >Home</Link>
            </li>
            {
              isloggedin && <li className="nav-item">
                <Link className="nav-link text-white fs-6 " to='/addmovie' href="#">Add Movie</Link>
                
              </li>

            }
            <Logout></Logout>
            {
             ! isloggedin && <li className="nav-item ">
                <Link className="nav-link text-white fs-6" to='/login' >login</Link>
              </li>
            }
          </ul>


        </div>
      </nav>
    </div>
  )
}

export default Navbar
