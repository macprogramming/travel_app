import React from "react";
import Image from "next/image";
import hotelLogo from '@/assets/Hotel.svg'
import notificationlogo from '@/assets/Notification.svg'
import cafelogo from '@/assets/Cafe.svg'
import bookinglogo from '@/assets/Booking.svg'
import planelogo from '@/assets/Plane.svg'
import beachLogo from '@/assets/beach.jpeg';

const Popularcategory = () => {
  return(
    <>
      <div className="row">
        <div className="col-12 text-center py-4 opacity">
          <p className="m-0 text-custom-secondary">Travel Category</p>
          <h3 className="text-custom-primary fw-bold">Our Popular Tour Type</h3>
        </div>
      </div>
      <div className="row row-cols-12 row-cols-md-4 row-cols-lg-6 g-5 mb-4">
        <div className="col">
          <div className="card text-center py-2 border-0 shadow-lg rounded-circle">
            <div className="card-header border-0 bg-white">
              <Image src={hotelLogo} height={60} width={60} className="categoryIcon" />
            </div>
            <div className="card-body">
              <h6 className="m-0 text-custom-primary">City Tour</h6>
              <small className="text-secondary">30 Place</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center py-2 border-0 shadow-lg rounded-circle">
            <div className="card-header border-0 bg-white">
              <Image src={notificationlogo} height={60} width={60} className="categoryIcon" />
            </div>
            <div className="card-body">
              <h6 className="m-0 text-custom-primary">Adventure</h6>
              <small className="text-secondary">30 Place</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center py-2 border-0 shadow-lg rounded-circle">
            <div className="card-header border-0 bg-white">
              <Image src={cafelogo} height={60} width={60} className="categoryIcon" />
            </div>
            <div className="card-body">
              <h6 className="m-0 text-custom-primary">Sea Tours</h6>
              <small className="text-secondary">30 Place</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center py-2 border-0 shadow-lg rounded-circle">
            <div className="card-header border-0 bg-white">
              <Image src={bookinglogo} height={60} width={60} className="categoryIcon" />
            </div>
            <div className="card-body">
              <h6 className="m-0 text-custom-primary">Travel</h6>
              <small className="text-secondary">30 Place</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center py-2 border-0 shadow-lg rounded-circle">
            <div className="card-header border-0 bg-white">
              <Image src={planelogo} height={60} width={60} className="categoryIcon" />
            </div>
            <div className="card-body">
              <h6 className="m-0 text-custom-primary">Wedding</h6>
              <small className="text-secondary">30 Place</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-center py-2 border-0 shadow-lg rounded-circle">
            <div className="card-header border-0 bg-white">
              <Image src={beachLogo} height={60} width={60} className="categoryIcon" />
            </div>
            <div className="card-body">
              <h6 className="m-0 text-custom-primary">Cruises Tour</h6>
              <small className="text-secondary">30 Place</small>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Popularcategory;