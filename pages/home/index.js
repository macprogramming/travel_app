import Header from "@/components/Header";
import { useEffect } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Popularcategory from "@/components/Popularcategory";
import Banner from "@/components/Banner";
import Populardestination from "@/components/Populardestination";
import Trippackage from "@/components/Trippackage";
import Reviewbanner from "@/components/Reviewbanner";
import Footer from "@/components/Footer";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Image from "next/image";
import bannerImage from '@/assets/home_banner_2.jpg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import Link from "next/link";
import Searchform from "@/components/Searchform";
// import video from '../../assets/video_home.mp4'

const Home = () => {
  return(
    <>
      <div className="">
      <Header />
      <div className="container">
        <div className="row align-items-center" style={{ height: '90vh' }}>
          <div className="col col-md-6">
            <small className="text-custom-primary letter-spacing-1 text-capitalize">Explore the World</small>
            <h1 className="text-uppercase my-md-4 fw-bold text-custom-primary fst-italic text-center">Find Your Perfect Tour At <span className="text-custom-secondary">Travel</span></h1>
            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="d-flex">
              <button type="button" className="btn btn-sm btn-custom-secondary me-md-2">Book Now</button>
              <FacebookIcon className="mx-md-2 text-custom-secondary" fontSize="large" />
              <TwitterIcon className="mx-md-2 text-custom-secondary" fontSize="large" />
              <InstagramIcon className="mx-md-2 text-custom-secondary" fontSize="large" />
              <LinkedInIcon className="mx-md-2 text-custom-secondary" fontSize="large" />
            </div>
          </div>
          <div className="col col-md-6">
            <Image src={bannerImage} className="img img-fluid" />
          </div>
        </div>
        {/* <Banner />
        <Populardestination />
        <Trippackage /> */}
      </div>
      
      {/* <div className="container-fluid px-0 mx-0">
        <div className="row px-0 mx-0 position-relative">
          <header className="video-header px-0 mx-0">
            <span className="content-span"></span>
            <video src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/Island%20-%204141.mp4" autoplay loop playsinline muted></video>
          </header>
          <div className="tcontent-end text-center">
            <h1>Let's Make your</h1>
            <h1>Dream Vacation</h1>
          </div>
          <div className="position-absolute content-form px-md-0 px-5">
            <div className="col-md-10 offset-md-1">
              <div className='row row-cols-12 row-cols-md-4 g-md-3 bg-white rounded-3 p-3'>
                <div>
                  <label className='form-label' htmlFor='location'>Location :</label>
                  <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example">
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
                  <select className="form-select form-select-md mb-md-3" aria-label=".form-select-lg example">
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
        </div>
      </div>
      <div className="container">
        <Popularcategory />
        <Banner />
        <Populardestination />
        <Trippackage />
      </div>
      <div className="bg-white my-5">
        <Reviewbanner />
      </div> */}
      <Searchform />
      <div className="container mb-4">
        <Popularcategory />
        <Banner />
        <Populardestination />
        <Trippackage />
      </div>
      <Footer />
      </div>
    </>
  )
}

export default Home;