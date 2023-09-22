import Link from "next/link";
import React from "react";
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import logo from '@/assets/Dummy_Logo.svg';
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';

const Footer = () => {
  return(
    <>
      <div className="bg-custom-primary">
      <div className="container">
        <div className="row row-cols-12 row-cols-sm-2 row-cols-md-3 py-5">
          <div className="col">
            <div>
              <ul className="list-unstyle">
                <li className="list-group-item"><Link className="nav-link" href='/'>Home</Link></li>
                <li className="list-group-item"><Link className="nav-link" href='/'>About Us</Link></li>
                <li className="list-group-item"><Link className="nav-link" href='/'>Contact Us</Link></li>
                <li className="list-group-item"><Link className="nav-link" href='/'>Blog</Link></li>
                <li className="list-group-item"><Link className="nav-link" href='/'>Forum</Link></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div>
              <ul className="list-unstyle">
                <li className="list-group-item"><Link className="nav-link" href='/'>Privacy Policy</Link></li>
                <li className="list-group-item"><Link className="nav-link" href='/'>Refunds And Returns</Link></li>
                <li className="list-group-item"><Link className="nav-link" href='/'>Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <div className="card bg-custom-primary-light p-4 rounded-0">
              <div className="card-body">
                <form>
                  <h5 className="text-white">Subscribe</h5>
                    <div className='form-group-custom'>
                      <input type='email' className='form-control rounded-0' placeholder='Email Address' />
                      <Button variant="contained" className='btn-custom-primary rounded-0'><ArrowRightAltIcon /></Button>
                    </div>
                    <p className="text-secondary my-4">
                      We are thrilled to share with you very valuable vehicle related information for free. Sign up to our newsletter to get yourself in the exclusive list.
                    </p>
                </form>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex justify-content-">
              <CallIcon />&nbsp;Call us friendly support 24/7
            </div>
            <address>
              <small>
                Address : <span>250 Penn Avenue Pittsburge<br />Pennsylvania, 3584 United State</span>
                <br />
                Email : <span>support@gmail.com</span>
              </small>  
            </address>
          </div>
        </div>
        <hr />
        <div className="row align-items-center">
          <div className="col-3">
            <div>
              <Image src={logo} className="img img-fluid" />
            </div>
          </div>
          <div className="col-7 text-center">
            <p className="m-0">&copy;&nbsp;Copyright {new Date().getFullYear()}&nbsp;<strong>macprogramming</strong>. All Right Reserved.</p>
          </div>
          <div className="col-1">
            <div className="justify-content-between align-items-center">
              <ul className="list-unstyle d-flex flex-md-row flex-column">
                <li className="list-group-item">
                  <Link href='/'><FacebookIcon fontSize="medium" /></Link>
                </li>
                <li className="list-group-item">
                  <Link href='/'><TwitterIcon fontSize="medium" /></Link>
                </li>
                <li className="list-group-item">
                  <Link href='/'><InstagramIcon fontSize="medium" /></Link>
                </li>
                <li className="list-group-item">
                  <Link href='/'><LinkedInIcon fontSize="medium" /></Link>
                </li>
                <li className="list-group-item">
                  <Link href='/'><YouTubeIcon fontSize="medium" /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer;