import React from "react";

const Contactform = () => {
  return(
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4">
        <form className='needs-validation' novalidate method='POST'>
          <div className='row g-3'>
            <div className="col-12 col-md-6">
              <div className='has-validation'>
                <label className='form-label' htmlFor='yourname'>Your Name :</label>
                <input className='form-control form-input has-validation' type='text' name="yourname" id="yourname" placeholder='Enter your name' required />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div>
                <label className='form-label' htmlFor='email'>Your Email :</label>
                <input className='form-control form-input' type='email' name="email" id="email" placeholder='Enter your email' />
              </div>
            </div>
            <div className="col-12">
              <div>
                <label className='form-label' htmlFor='subject'>Subject :</label>
                <input className='form-control form-input' type='text' name="subject" id='subject' placeholder='Enter subject' />
              </div>
            </div>
            <div className="col-12">
              <div>
                <label className='form-label' htmlFor='question'>Write your question :</label>
                <textarea class="form-control form-input" id="question" name="question" rows="3"></textarea>
              </div>
            </div>
          </div>
          <div class="form-check my-2">
            <input class="form-check-input form-check-input-primary rounded-0 p-2" type="checkbox" value="" id="flexCheckDefault" /> 
            <label class="form-check-label" for="flexCheckDefault">
              Save my name, email and website in this browser for the next time I Comment.
            </label>
          </div>
          <div className='my-3 d-block'>
            <button type='button' className='btn w-md-25 btn-md btn-custom-secondary'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contactform;