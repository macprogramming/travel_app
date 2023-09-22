import img from '../../assets/Login_image.svg'
import Image from 'next/image';
import logo from '../../assets/Dummy_Logo.svg';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from '@mui/material';
import { useRouter } from 'next/router';
const Login = () => {
  const router = useRouter();
  return(
    <>
      <div className="container-fluid bg-light">
        <div className="row mx-md-5 custom-mh-100">
          <div className="offset-md-1 col-12 col-md-10 d-flex justify-content-center align-items-center">
            <div className='row'>
              <div className="col-12 col-md-7 mh-100 order-1 order-md-0">
                <Image className='img img-fluid h-100' src={img} alt="Picture of the author" />
              </div>
              <div className="col col-md-5 mh-100 order-0 order-md-1">
                <div className='card border-0 px-md-4 h-100'>
                  <div className='card-header bg-white border-0 text-center'>
                    <Image className='img img-fluid w-50' src={logo} alt="Picture of the author" />
                    <p>Login into your account</p>
                  </div>
                  <div className='card-body'>
                    <form>
                      <div className='form-group mb-2'>
                        <label className='form-label'>Email Id:</label>
                        <input className='form-control' type='email' name="email" placeholder='Enter your email' />
                        <MailOutlineOutlinedIcon className="icon" />
                      </div>
                      <div className='form-group mb-2'>
                        <label className='form-label'>Password</label>
                        <input className='form-control' type='password' name="email" placeholder='Enter your password' />
                        <LockOutlinedIcon fontSize='10px' className="icon" />
                      </div>
                      <div className='form-group my-3 text-end'>
                        <Link className='text-decoration-none text-custom-secondary' href="/forgotpassword">Forgot password</Link>
                      </div>
                      <div className='d-grid mb-2 d-block'>
                        <button type='button' className='btn btn-md btn-custom-primary'>Login Now</button>
                      </div>
                      <hr class="hr-text" data-content="OR" />
                      <div className='d-grid mb-2 d-block'>
                        <button type='button' onClick={ () => router.push('/signup')} className='btn btn-md btn-custom-outline-primary'>Signup now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;