import '../Styles/Login.css'

import { Link } from 'react-router-dom'




function Login(){


    function handleLogin(){
        localStorage.setItem('auth',true)
        window.location.reload()
    }


    return(
        <>
        <div className="login-container">
    
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button onClick={handleLogin} type="submit" class="btn btn-primary">Submit</button>
      <br></br>
      <i><h5>Don't have an Account? &nbsp; <Link to='/register'>Register here</Link></h5></i>
      </div>
      </>



    )





}
export default Login