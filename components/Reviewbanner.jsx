import React from 'react';
import Image from 'next/image';
import img from '@/assets/user.jpg'
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

const Reviewbanner = () => {
  return(
    <div className='container'>
      <div className='row'>
        <div className="col-12 text-center">
          <h3 className="py-4 text-custom-primary fw-bold">What Travelers Are Saying</h3>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-8 text-center offset-md-2'>
          <p>"I am a traveler and ON TRIP Travels helps me a lot in finding interesting tourist destinations and of course the price offers is very worth it".</p>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-md-2'>
        <div className='col'>
          <div className="card mb-3 border-0 shadow-lg">
            <div className="row g-0 align-items-center">
              <div className="col-md-3 col-3">
                <Image src={img} className="img img-fluid p-2 rounded-circle" />
              </div>
              <div className="col-md-8 col-9">
                <div className="card-body">
                  <h5 className="card-title">Makarand Chikhale</h5>
                  <ul className='nav'>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                  </ul>
                  <p className="card-text">
                    Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us . 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card mb-3 border-0 shadow-lg">
            <div className="row g-0 align-items-center">
              <div className="col-md-3 col-3">
                <Image src={img} className="img img-fluid p-2 rounded-circle" />
              </div>
              <div className="col-md-8 col-9">
                <div className="card-body">
                  <h5 className="card-title">Makarand Chikhale</h5>
                  <ul className='nav'>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#ffb900' /></li>
                    <li><StarIcon htmlColor='#2a292936' /></li>
                  </ul>
                  <p className="card-text">
                    Good trip. The team of ON TRIP tours and travel was very supportive and maintained prompt communication with us . 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row bg-custom-primary mx-md-1 p-2 py-4 align-items-center'>
        <div className='col-12 col-md-7'>
          <p className='m-0 text-white'>
            Subscribe to get information, latest news and other interesting offers about ON TRIP Travels
          </p>
        </div>
        <div className='col-12 col-md-5'>
          <div className='form-group-custom'>
            <input type='email' className='form-control rounded-0' placeholder='Type your email here...' />
            <Button variant="contained" className='btn-custom-primary rounded-0'>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviewbanner;