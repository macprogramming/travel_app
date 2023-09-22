import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  let router = useRouter();
  return(
    <header className="px-md-4 sticky-top bg-white">
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
          <a className="navbar-brand"><h3 className="fw-bold">Travel<span className="text-custom-secondary">App</span></h3></a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarList">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarList">
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll custom-ul">
              <li className="nav-item"> 
                <Link className={router.pathname == '/home' ? 'nav-link text-custom-secondary text-uppercase' : 'nav-link text-uppercase' } href='/home'>Home</Link>
              </li>
              <li className="nav-item"> 
                <Link className={router.pathname == '/destination' ? 'nav-link text-custom-secondary text-uppercase' : 'nav-link text-uppercase' } href='/destination'>Destination</Link>
              </li>
              <li className="nav-item"> 
                <Link className={router.pathname == '/tours' ? 'nav-link text-custom-secondary text-uppercase' : 'nav-link text-uppercase' } href='/tours'>Tours</Link>
              </li>
              <li className="nav-item"> 
                <Link className={router.pathname == '/tourguide' ? 'nav-link text-custom-secondary text-uppercase' : 'nav-link text-uppercase' } href='/tourguide'>Tour Guide</Link>
              </li>
              <li className="nav-item"> 
                <Link className={router.pathname == '/blog' ? 'nav-link text-custom-secondary text-uppercase' : 'nav-link text-uppercase' } href='/blog'>Blog</Link>
              </li>
              <li className="nav-item"> 
                <Link className={router.pathname == '/contact' ? 'nav-link text-custom-secondary text-uppercase' : 'nav-link text-uppercase' } href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll align-items-center">
              <li className="nav-item dromdown position-relative">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Langauge
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">English</a></li>
                  <li><a class="dropdown-item" href="#">Hindi</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href='/login'>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link btn py-1 rounded-4 bg-white" href='/signup'>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;