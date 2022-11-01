import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
  const { logOut, user } = useContext(AuthContext)
  const signOut = event =>{
    event.preventDefault()
    logOut()
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      console.error(error)
    })
  }
  const menuItems = <>
    <li className='font-semibold'><Link className='mr-5' to='/'>Home</Link></li>
    {
      user?.uid ?
        <>
        <button className="btn btn-outline btn-success" onClick={signOut} >LogOut</button>
        </>
        :
        <>
          <li className='font-semibold'><Link to='/login'>Login</Link></li>
          <li className='font-semibold'><Link to='/Register'>Register</Link></li>
        </>
    }


  </>
  return (
    <div>
      <div className="navbar h-20 mb-12 pt-12 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuItems}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
            
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-warning">Appointment</button>
        </div>
        <div>
          {/* {
      user?.uid ? 
      <button onClick={logOut} >LogOut</button>
      :
      <>
      <div className="form-control mt-6">
        <Link to='/login'><button className="btn btn-outline btn-info">Info</button></Link>
        <Link to='/register'><button className="btn btn-outline btn-success">Success</button></Link>
        </div>
      </>
    } */}
        </div>
      </div>
    </div>
  );
};

export default Header;