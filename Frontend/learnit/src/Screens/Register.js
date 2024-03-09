


import { Link } from "react-router-dom"

function Register(){


    return(
        <>
        <div className="login-container">
    
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Mobile</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Interest</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary">Submit</button>
      <br></br>
      <i><h5>Already have an Account? &nbsp; <Link to='/login'>Login here</Link></h5></i>

      </div>
      </>



    )





}
export default Register