import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const {loginWithEmailPAss} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value
        loginWithEmailPAss(email,password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset('')
            toast.success('Login SucessFully')
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <div className="hero my-20 w-full">
  <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lag:flex-row ">
    <div className="text-center lg:text-left">
      <img className='w-3/4' src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5 ">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
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
            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
         
        </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value="login" /> 
        </div>
        <label className="label">
           <p className='text-center mt-5'>New To Genius Car - <Link className='text-orange-600 font-bold' to='/register'>Sign Up</Link> </p>
          </label>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;