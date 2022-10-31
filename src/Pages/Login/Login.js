import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div>
            <div className="hero my-20 w-full">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
           <p>If You Don't Have Any Account Please - <Link className='text-orange-600 underline' to='/register'>Register</Link> </p>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="login" /> 
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;