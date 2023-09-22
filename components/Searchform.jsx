import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Popularcategory from "@/components/Popularcategory";
import Banner from "@/components/Banner";
import Populardestination from "@/components/Populardestination";
import Trippackage from "@/components/Trippackage";
import Reviewbanner from "@/components/Reviewbanner";

const Searchform = () => {
  return(
    <>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-12 text-center py-4 opacity">
            <p className="m-0 text-custom-secondary text-capitalize">Find your Perfect Tour With-your Perferance !!!</p>
            <h3 className="text-custom-primary fw-bold">Search Your Best Tour</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-md-2">
            <form action="" className="">
              <div className="px-md-0">
                <div className="col-md-12 bg-white rounded-4 mb-4">
                  <div className='row row-cols-12 row-cols-md-4 g-md-3 p-5'>
                    <div>
                      <label className='form-label' htmlFor='location'>Location :</label>
                      <select className="form-select form-input form-select-md mb-3" aria-label=".form-select-lg example">
                        <option selected>Select location</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div>
                      <label className='form-label' htmlFor='date'>Date :</label>
                      <input className='form-control form-input' type='date' name="date" id="date"  placeholder='Enter your last name' />
                    </div>
                    <div>
                      <label className='form-label' htmlFor='pricing'>Pricing :</label>
                      <select className="form-select form-input form-select-md mb-md-3" aria-label=".form-select-lg example">
                        <option selected>Select Pricing</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="">
                      <label className='form-label invisible' htmlFor='pricing'>Pricing :</label>
                      <button type="button" className="btn btn-md d-block btn-custom-primary"><SearchOutlinedIcon />&nbsp;Explore Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Searchform;