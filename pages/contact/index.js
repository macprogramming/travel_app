import Header from "@/components/Header";
import Image from "next/image";
import map from '@/assets/map.jpg'
import CallIcon from '@mui/icons-material/Call';
import Link from "next/link";
import Footer from "@/components/Footer";
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import TtyIcon from '@mui/icons-material/Tty';
import Pagebanner from "@/components/Pagebanner";
import bannerImg from '@/assets/map.jpg'
import Contactform from "@/components/Contactform";

const Contact = () => {
  return(
    <>
      <div className="bg-light">
        <Header />
      </div>
      <div className="container mb-5">
        <Pagebanner link='Contact us' image={bannerImg} title="Contact Us" />
        <div className="row">
          <div className="col-12 col-md-4">
            <h3 className="text-custom-primary">Lets Talk</h3>
            <p className="text-secondary">The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="row my-2">
              <div className="col-2">
                <div className="shadow-lg card border-0 bg-white p-2 rounded-circle w-100 align-items-center">
                  <TtyIcon className="text-custom-secondary" />
                </div>
              </div>
              <div className="col-10">
                <h6 className="m-0 text-custom-primary">Call us</h6>
                <p className="m-0 text-secondary">+1234567890</p>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-2">
                <div className="shadow-lg card border-0 bg-white p-2 rounded-circle w-100 align-items-center">
                  <MarkEmailReadIcon className="text-custom-primary" />
                </div>
              </div>
              <div className="col-10">
                <h6 className="m-0 text-custom-primary">E-mail Address</h6>
                <p className="m-0 text-secondary">info@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <h3 className="text-custom-primary">Send us a message</h3>
            <p className="text-secondary">The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Contactform />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact;