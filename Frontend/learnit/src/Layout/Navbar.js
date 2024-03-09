

import {useNavigate} from 'react-router-dom'
import '../Styles/Navbar.css'

function Navbar(){

  const navigate= useNavigate()



  function checkActive(path){
    var y = window.location.href.includes(path)
    
    return y
  }

  function handleLogout(){
    
    localStorage.setItem('auth',false)
    window.location.reload()
  }




    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class={`nav-link ${checkActive('home') ? 'active' : ""}`}  aria-current="page" onClick={()=> navigate('/home')}>Home</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${checkActive('about') ? 'active' : ""}`} aria-current="page" onClick={()=> navigate('/about')}>About</a>
        </li>
        <li class="nav-item">
          <a class={`nav-link ${checkActive('contact') ? 'active' : ""}`} aria-current="page" onClick={()=> navigate('/contact')}>Contact</a>
        </li>
        
        </ul>
        <ul class="navbar-nav d-flex flex-row">
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-facebook-f text-black"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-instagram text-black"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-linkedin text-black"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-github text-black"></i>
                    </a>
                </li>
                <li class="nav-item me-3 me-lg-0">
                    <a class="nav-link" href="#">
                        <i class="fab fa-twitter text-black"></i>
                    </a>
                </li>
        
                <li class="nav-item me-3 me-lg-0 dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <i class="fas fa-user text-black"></i>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                </li>
            </ul>

              <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handleLogout} class="btn btn-outline-success" type="submit">Logout</button>
      </form>
    </div>
  </div>
</nav>


    )
}

export default Navbar
