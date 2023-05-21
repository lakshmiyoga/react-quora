import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = (props) => {

  const navigate = useNavigate()


  const onLogoutHandler = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    toast.success('Logout Succesfully');
    setTimeout(() => {
      navigate('/login')
    }, 3000)

  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white shadow-sm">
        <div class="container">
          <Link class="navbar-brand fw-bold fs-1 text-danger" to="/">Quora</Link>
          <div class="search-form">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="search for questions..." aria-label="Search" />
            </form>
          </div>

          <div className='buttons'>
            <Link class="btn btn-danger ms-2" to="/addQuestion">Add question</Link>
            <Link class="btn btn-danger ms-2" to="/answerPage">Answer question</Link>
            {/* <Link class="btn btn-danger ms-2" to="/login">Login</Link> */}
            {/* <button class="btn btn-danger ms-2" onClick={onLogoutHandler}>Logout</button> */}

            {props.login == 'true' && <Link class="btn btn-danger ms-2" to="/login">Login</Link>}
            {props.login !== 'true' && <button class="btn btn-danger ms-2" onClick={onLogoutHandler}>Logout</button>}

          </div>
          <ToastContainer autoClose={2000} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
