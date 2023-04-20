import React,{ useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,NavLink } from "react-router-dom";
import { UserContext } from '../App';

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext )
  const RenderMenu =() => {
if(state){
 return (
   <>
 <li className="nav-item active">
  <NavLink className="nav-link" to="/">Home</NavLink>
</li>
<li className="nav-item">
  <NavLink className="nav-link" to="/about">About</NavLink>
</li>
      <li className="nav-item">
        <Link className="nav-link" to="/contect">Contect</Link>
      </li>
      <li className="nav-item">
  <NavLink className="nav-link" to="/Logout">Logout</NavLink>
</li>
   </>
 )
}else{
  return (
    <>

<li className="nav-item active">
  <NavLink className="nav-link" to="/">Home</NavLink>
</li>
<li className="nav-item">
  <NavLink className="nav-link" to="/about">About</NavLink>
</li>
      <li className="nav-item">
        <Link className="nav-link" to="/contect">Contect</Link>
      </li>
      <li className="nav-item">
  <NavLink className="nav-link" to="/signup">registartion</NavLink>
</li>
<li className="nav-item">
  <NavLink className="nav-link" to="/login">Login</NavLink>
</li>
     <li className="nav-item">
  <NavLink className="nav-link" to="/Logout">Logout</NavLink>
</li>
    </>
  )
}
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

  <Link className="navbar-brand" href="/">Ecard</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
    <RenderMenu></RenderMenu>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
