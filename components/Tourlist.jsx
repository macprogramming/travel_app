import React from "react";
import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import tour_1image from '@/assets/tour_1.jpeg';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

const Tourlist = () => {
  return(
    <div>
      <form className="form">
        <div className='form-group-custom'>
          <input type='email' className='form-control rounded-0' placeholder='Search...' />
          <Button variant="contained" className='btn-custom-primary rounded-0'><SearchIcon /></Button>
        </div>
      </form>
      <h3 className="text-custom-primary py-3">Travellino Tour List</h3>
      <div className="card mb-3 border-0">
        <div className="row g-0 mb-2">
          <div className="col-md-4">
            <Image src={tour_1image} className="img img-fluid card-img-top rounded-3 h-100 w-100" />
          </div>
          <div className="col-md-8">
            <div className="card-body py-0">
              <h6 className="card-title text-custom-primary">Aegean Adventure</h6>
              <div>
                <StarIcon htmlColor="#ffb900" />&nbsp;<small className="text-secondary">4.5&nbsp;(311&nbsp;Reviews)</small>
              </div>
              <div>
                <small className="text-custom-primary fw-bold">From</small>&nbsp;<span className="fw-bold text-custom-secondary">&#36;500.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 mb-2">
          <div className="col-md-4">
            <Image src={tour_1image} className="img img-fluid card-img-top rounded-3 h-100 w-100" />
          </div>
          <div className="col-md-8">
            <div className="card-body py-0">
              <h6 className="card-title text-custom-primary">Aegean Adventure</h6>
              <div>
                <StarIcon htmlColor="#ffb900" />&nbsp;<small className="text-secondary">4.5&nbsp;(311&nbsp;Reviews)</small>
              </div>
              <div>
                <small className="text-custom-primary fw-bold">From</small>&nbsp;<span className="fw-bold text-custom-secondary">&#36;500.00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-0 mb-2">
          <div className="col-md-4">
            <Image src={tour_1image} className="img img-fluid card-img-top rounded-3 h-100 w-100" />
          </div>
          <div className="col-md-8">
            <div className="card-body py-0">
              <h6 className="card-title text-custom-primary">Aegean Adventure</h6>
              <div>
                <StarIcon htmlColor="#ffb900" />&nbsp;<small className="text-secondary">4.5&nbsp;(311&nbsp;Reviews)</small>
              </div>
              <div>
                <small className="text-custom-primary fw-bold">From</small>&nbsp;<span className="fw-bold text-custom-secondary">&#36;500.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tourlist;