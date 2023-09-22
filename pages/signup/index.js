"use client";
import signupImage from '../../assets/sign_up.svg';
import Image from 'next/image';
import logo from '../../assets/Dummy_Logo.svg';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { registerUser } from '../services/register';


const Signup = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobilenumber: '',
    password: '',
    confirmpassword: '',
    role: '',
    gender: '',
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let { firstname, lastname ,email ,mobilenumber, password, confirmpassword, role, gender } = user;

    if(name === 'firstname') {
      firstname = e.target.value;
    } else if (name === 'lastname') {
      lastname = e.target.value;
    } else if (name === 'email') {
      email = e.target.value;
    } else if (name === 'mobilenumber') {
      mobilenumber = e.target.value;
    } else if (name === 'password') {
      password = e.target.value;
    } else if (name === 'confirmpassword') {
      confirmpassword = e.target.value;
    } else if (name === 'role') {
      role = e.target.value;
    } else if (name === 'gender') {
      gender = e.target.value;
    }

    setUser({
      firstname, lastname ,email ,mobilenumber, password, confirmpassword, role, gender
    });
  }

  const handleSubmit = async () => {
    let { firstname, lastname ,email ,mobilenumber, password, confirmpassword, role, gender } = user;
    if ( firstname === '') {
      toast.error("Please enter first name!");
    } else if ( lastname === '') {
      toast.error("Please enter last name!");
    } else if ( email === '') {
      toast.error("Please enter email!");
    } else if ( mobilenumber === '') {
      toast.error("Please enter mobile number!");
    } else if ( password === '') {
      toast.error("Please enter password!");
    } else if ( confirmpassword === '') {
      toast.error("Please enter confirm password!");
    } else if ( role === '') {
      toast.error("Please select role!");
    } else if ( gender === '') {
      toast.error("Please select gender!");
    } else {
      const data = await registerUser(user)
      console.log(data)
    }
    // console.log(user)
  }

  return(
    <>
      <div className="container-fluid bg-light">
        <div className="row mx-md-5 custom-mh-100">
          <div className="offset-md-1 col-12 col-md-10 d-flex justify-content-center align-items-center">
            <div className='row'>
              <div className="col-12 col-md-7 mh-100">
                <div className='card border-0 px-md-4 h-100'>
                  <div className='card-header bg-white border-0 text-center'>
                    <Image className='img img-fluid w-50' src={logo} alt="Picture of the author" />
                    <p>Sign up into your account</p>
                  </div>
                  <div className='card-body'>
                    <form className='needs-validation' novalidate method='POST'>
                      <div className='row row-cols-2 g-3'>
                        <div className='has-validation'>
                          <label className='form-label' htmlFor='firstname'>First Name :</label>
                          <input className='form-control form-input has-validation' value={user.firstname} onChange={handleInput} type='text' name="firstname" id="firstname" placeholder='Enter your first name' required />
                        </div>
                        <div>
                          <label className='form-label' htmlFor='lastname'>Last Name :</label>
                          <input className='form-control form-input' value={user.lastname} onChange={handleInput} type='text' name="lastname" id="lastname"  placeholder='Enter your last name' />
                        </div>
                        <div>
                          <label className='form-label' htmlFor='email'>Email Id :</label>
                          <input className='form-control form-input' value={user.email} onChange={handleInput} type='email' name="email" id="email" placeholder='Enter your email' />
                        </div>
                        <div>
                          <label className='form-label' htmlFor='mobilenumber'>Mobile No. :</label>
                          <input className='form-control form-input' value={user.mobilenumber} onChange={handleInput} type='text' name="mobilenumber" id='mobilenumber' placeholder='Enter your mobile' />
                        </div>
                        <div>
                          <label className='form-label' htmlFor="password">Password :</label>
                          <input className='form-control form-input' value={user.password} onChange={handleInput} type='password' name="password" id="password" placeholder='Enter password' />
                        </div>
                        <div>
                          <label className='form-label' htmlFor="confirmpassword">Confirm Password :</label>
                          <input className='form-control form-input' value={user.confirmpassword} onChange={handleInput} type='password' name="confirmpassword" id="confirmpassword" placeholder='Enter password' />
                        </div>
                        <div>
                          <label className='form-label' htmlFor="role">Role</label>
                            <select class="form-select form-input" value={user.role} onChange={handleInput} name="role" id="role" aria-label="Default select example">
                              <option selected>--Select--</option>
                              <option value="Admin">Admin</option>
                              <option value="User">User</option>
                            </select>
                        </div>
                        <div>
                          <label className='form-label' htmlFor="gender">Gender</label>
                            <select class="form-select form-input" value={user.gender} onChange={handleInput} name="gender" id="gender" aria-label="Default select example">
                              <option selected>--Select--</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Others">Others</option>
                            </select>
                        </div>
                      </div>
                      <div className='form-group my-3 text-end'>
                        <Link className='text-decoration-none text-custom-secondary' href="/login">Allready have an account? click here</Link>
                      </div>
                      <div className='my-3 d-block text-end'>
                        <button type='button' className='btn w-50 btn-md btn-custom-primary' onClick={handleSubmit}>Sign up</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 mh-100">
                <Image className='img img-fluid h-100' src={signupImage} alt="Picture of the author" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default Signup;