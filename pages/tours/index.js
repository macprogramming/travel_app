import Header from "@/components/Header";
import Pagebanner from "@/components/Pagebanner";
import bannerImg from '@/assets/tour_banner.jpg';
import Tourcard from "@/components/Tourcard";
import img from '@/assets/user.jpg';
import tour_1image from '@/assets/tour_1.jpeg';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

const Tours = () => {

  return(
    <>
      <Header />
      <div className="container">
        <Pagebanner link='Tours' image={bannerImg} title="Get the best plans for your's" />
        <div className="row px-md-5 row-cols-3 g-3 justify-content-center">
          <Tourcard image={tour_1image} tourname='Aegean Adventure' location='Venezia, Italy' starRating='4.4' reviewsCount='313' price='500.00' />
          <Tourcard image={tour_1image} tourname='Travel Vaction' location='Venezia, Italy' starRating='4.4' reviewsCount='313' price='500.00' />
          <Tourcard image={tour_1image} tourname='Aegean Vaction' location='Venezia, Italy' starRating='4.4' reviewsCount='313' price='500.00' />
          <Tourcard image={tour_1image} tourname='Aegean Vaction' location='Venezia, Italy' starRating='4.4' reviewsCount='313' price='500.00' />
          <Tourcard image={tour_1image} tourname='Aegean Vaction' location='Venezia, Italy' starRating='4.4' reviewsCount='313' price='500.00' />
        </div>
        <div className="row my-3">
          <div className="col-12">
            <nav className="text-center">
              <ul class="pagination custom-pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="#" tabindex="-1"><KeyboardBackspaceIcon />Prev</a>
                </li>
                <li class="page-item active"><a class="page-link" href="#">01</a></li>
                <li class="page-item" aria-current="page">
                  <a class="page-link" href="#">02</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">03</a></li>
                <li class="page-item">
                  <a class="page-link" href="#">Next<ArrowRightAltIcon /></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tours;