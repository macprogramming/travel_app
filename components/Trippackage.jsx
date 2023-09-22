import trip1 from '@/assets/trip_1.webp';
import trip2 from '@/assets/trip_2.jpg';
import trip3 from '@/assets/trip_3.jpeg';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Trippackage = () => {
  return(
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h3 className="py-4 text-custom-primary fw-bold">Trip Packages</h3>
        </div>
      </div>
      <div className="row row-cols-md-3 row-cols-1">
        <div className="col mh-100 trip_card">
          <div className="card h-100">
            <Image src={trip1} className="img img-fluid card-img-top h-100" />
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 class="card-title m-0 text-custom-primary fw-bold">Greece, Balos Beach</h5>
                <div><span class="badge bg-custom-secondary rounded-0"><StarIcon fontSize="20px" />&nbsp;4.8K</span></div>
              </div>
            </div>
            <div className='card-footer border-0 bg-white'>
              <div className='d-flex justify-content-between'>
                <b className='text-secondary'>15,000</b>
                <b className='text-secondary'><LocalAirportIcon />&nbsp;7 Days Trip</b>
              </div>
              <Button variant="contained" className='w-100 mt-2 btn-custom-primary d-none trip_button'>Travel Now <ArrowRightAltIcon /></Button>
            </div>
          </div>
        </div>
        <div className="col mh-100 trip_card">
          <div className="card h-100">
            <Image src={trip2} className="img img-fluid card-img-top h-100" />
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 class="card-title m-0 text-custom-primary fw-bold">Maldives, Silver Beach Resort</h5>
                <div><span class="badge bg-custom-secondary rounded-0"><StarIcon fontSize="20px" />&nbsp;4.8K</span></div>
              </div>
            </div>
            <div className='card-footer border-0 bg-white'>
              <div className='d-flex justify-content-between'>
                <b className='text-secondary'>15,000</b>
                <b className='text-secondary'><LocalAirportIcon />&nbsp;7 Days Trip</b>
              </div>
              <Button variant="contained" className='w-100 mt-2 btn-custom-primary d-none trip_button'>Travel Now <ArrowRightAltIcon /></Button>
            </div>
          </div>
        </div>
        <div className="col mh-100 trip_card">
          <div className="card h-100">
            <Image src={trip3} className="img img-fluid card-img-top h-100" />
            <div className="card-body">
              <div className='d-flex justify-content-between'>
                <h5 class="card-title m-0 text-custom-primary fw-bold">Greece, Balos Beach</h5>
                <div><span class="badge bg-custom-secondary rounded-0"><StarIcon fontSize="20px" />&nbsp;4.8K</span></div>
              </div>
            </div>
            <div className='card-footer border-0 bg-white'>
              <div className='d-flex justify-content-between'>
                <b className='text-secondary'>15,000</b>
                <b className='text-secondary'><LocalAirportIcon />&nbsp;7 Days Trip</b>
              </div>
              <Button variant="contained" className='w-100 mt-2 btn-custom-primary d-none trip_button'>Travel Now <ArrowRightAltIcon /></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trippackage;