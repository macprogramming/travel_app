import Header from "@/components/Header";
import Pagebanner from "@/components/Pagebanner";
import bannerImg from '@/assets/tour_banner.jpg';
import Link from "next/link";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import Footer from "@/components/Footer";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import DinnerDiningOutlinedIcon from '@mui/icons-material/DinnerDiningOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import tour_1image from '@/assets/tour_1.jpeg';
import { useState } from "react";
import Tourcard from "@/components/Tourcard";
const Tourdetails = () => {
  const [viewMore, setViewMore] = useState(false);
  function srcset(image, size, rows = 2, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  const itemData = [
    {
      img: 'https://wallpapers.com/images/hd/switzerland-village-by-the-lake-c2s925gxhnk7bz8v.jpg',
      title: 'Switzerland',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/977/548/906/beach-water-pier-tropical-wallpaper-preview.jpg',
      title: 'Maldives',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://c4.wallpaperflare.com/wallpaper/73/887/604/spain-barcelona-church-wallpaper-preview.jpg',
      title: 'spain',
      author: '@helloimnik',
    }
  ];

  const getViewmore = () => {
    setViewMore(true)
  }
  return(
    <>
      <Header />
      <div className="container mb-5">
        <Pagebanner link='Tour-Package' image={bannerImg} title="The Colosseum, Rome" />
        {
          !viewMore ?
        <div className="row">
          <div className="col-md-6 col-12">
            <small className="text-custom-secondary">Destination</small>
            <h3 className="text-custom-primary">We are Professional Planners For Your Vacations</h3>
            <p className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>
            <ul class="list-group">
              <li class="list-group-item border-0 px-0">
                <ShortcutIcon htmlColor="#fe4340" />&nbsp;
                <Link href='/' className="text-custom-primary text-decoration-none">Live Music</Link>
              </li>
              <li class="list-group-item border-0 px-0">
                <ShortcutIcon htmlColor="#fe4340" />&nbsp;
                <Link href='/' className="text-custom-primary text-decoration-none">1 Complimentary Floating Breakfast at the Ubud Pool Villa</Link>
              </li>
              <li class="list-group-item border-0 px-0">
                <ShortcutIcon htmlColor="#fe4340" />&nbsp;
                <Link href='/' className="text-custom-primary text-decoration-none">Free Entrance to Atlas Beach Club</Link>
              </li>
              <li class="list-group-item border-0 px-0">
                <ShortcutIcon htmlColor="#fe4340" />&nbsp;
                <Link href='/' className="text-custom-primary text-decoration-none">Get a free upgrade from Superior Room to Deluxe Balcony</Link>
              </li>
            </ul>
            <button type='button' onClick={getViewmore} className='btn w-md-25 btn-sm btn-custom-secondary'>View More</button>
          </div>
          <div className="col-md-6 col-12">
          <ImageList
              sx={{
                width: 500,
                height: 450,
                // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                transform: 'translateZ(0)',
              }}
              rowHeight={150}
              gap={0}
            >
              {itemData.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;

                return (
                  <ImageListItem key={item.img} cols={cols} rows={rows}>
                    <img
                      {...srcset(item.img, 250, 200, rows, cols)}
                      alt={item.title}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      sx={{
                        background:
                          'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                      }}
                      position="top"
                      actionPosition="left"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </div>
        </div>
        :
        <>
        <div className="row px-md-5">
          <div className="col-md-7 col-12">
            <ul className="nav nav-pills custom-nav-pills mb-3 border-bottom" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="pills-package-details-tab" data-bs-toggle="pill" data-bs-target="#pills-package-details"><InfoOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Package Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-gallery"><CollectionsOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-policy-tab" data-bs-toggle="pill" data-bs-target="#pills-policy"><AssignmentLateOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Policy</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-package-details">
                <div className="d-flex align-items-end">
                  <h5 className="m-0 text-custom-secondary">&#36;500.00 / </h5><small className="text-custom-primary">Per person</small>
                </div>
                <div className="row row-cols-3 g-2 my-2">
                  <div className="col">
                    <small className="text-custom-primary"><InfoOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;4 Days / 5 Night</small>
                  </div>
                  <div className="col">
                    <small className="text-custom-primary"><PersonOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Max People 5</small>
                  </div>
                  <div className="col">
                    <small className="text-custom-primary"><FmdGoodOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Place : USA</small>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4 className="text-custom-primary">More Details</h4>
                    <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  </div>
                </div>
                <ul class="list-group">
                  <li class="list-group-item my-1 border rounded-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="text-custom-primary">Destination : </h6>
                      <span className="text-secondary">The Itely</span>
                    </div>
                  </li>
                  <li class="list-group-item my-1 border rounded-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="text-custom-primary">Departure / Return Locatioon : </h6>
                      <span className="text-secondary">Rome F.K International Airport</span>
                    </div>
                  </li>
                  <li class="list-group-item my-1 border rounded-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="text-custom-primary">Departure Time : </h6>
                      <span className="text-secondary">Please arrive by 9:15 AM for a departure at 9:30 AM</span>
                    </div>
                  </li>
                  <li class="list-group-item my-1 border rounded-1">
                    <div className="d-flex justify-content-between">
                      <h6 className="text-custom-primary">Return Time : </h6>
                      <span className="text-secondary">Approximately 10:30 PM</span>
                    </div>
                  </li>
                  <li class="list-group-item my-1 my-1 border rounded-1">
                    <div className="row row-cols-3 g-2">
                      <div className="col">
                        <small className="text-custom-primary"><StarOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;4.9 Accommondation</small>
                      </div>
                      <div className="col">
                        <small className="text-custom-primary"><FlightTakeoffOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;4.9 Airport</small>
                      </div>
                      <div className="col">
                        <small className="text-custom-primary"><WifiOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Wi-fi</small>
                      </div>
                      <div className="col">
                        <small className="text-custom-primary"><DinnerDiningOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;4.9 Dinner & Snacks</small>
                      </div>
                      <div className="col">
                        <small className="text-custom-primary"><SettingsOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Additional Services</small>
                      </div>
                      <div className="col">
                        <small className="text-custom-primary"><MedicalInformationOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Insurence</small>
                      </div>
                      <div className="col">
                        <small className="text-custom-primary"><LocalShippingOutlinedIcon htmlColor="#fe4340" fontSize="small" />&nbsp;Transport</small>
                      </div>
                    </div>
                  </li>
                </ul>
                <p className="text-secondary mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </div>
              <div className="tab-pane fade" id="pills-gallery">gallery</div>
              <div className="tab-pane fade" id="pills-policy">policy</div>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <div className="row">
              <div className="col-12">
                <h4 className="text-custom-primary">Book The Package :</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card bg-light border-0 shadow-sm">
                  <div className="card-body">
                    <form className='needs-validation' novalidate method='POST'>
                      <div className='row g-3'>
                        <div className="col-12">
                          <div className='has-validation'>
                            <label className='form-label' htmlFor='yourname'>Your Name :</label>
                            <input className='form-control form-input has-validation' type='text' name="yourname" id="yourname" placeholder='Enter your name' required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div>
                            <label className='form-label' htmlFor='email'>Your Email :</label>
                            <input className='form-control form-input' type='email' name="email" id="email" placeholder='Enter your email' />
                          </div>
                        </div>
                        <div className="col-12">
                          <div>
                            <label className='form-label' htmlFor='phone'>Your Phone number :</label>
                            <input className='form-control form-input' type='text' name="phone" id="phone" placeholder='Enter your phone' />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div>
                            <label className='form-label' htmlFor='checkin'>Check In :</label>
                            <input className='form-control form-input' type='date' name="checkin" id="checkin" placeholder='Check-In Date' />
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div>
                            <label className='form-label' htmlFor='checkout'>Check Out :</label>
                            <input className='form-control form-input' type='date' name="checkout" id="checkout" placeholder='Check-Out Date' />
                          </div>
                        </div>
                        <div className="col-12">
                          <div>
                            <label className='form-label' htmlFor='people'>People :</label>
                            <input className='form-control form-input' type='text' name="people" id='people' placeholder='Enter people count' maxLength={1} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div>
                            <label className='form-label' htmlFor='ticketCount'>Number of Tickets :</label>
                            <input className='form-control form-input' type='text' name="ticketCount" id='ticketCount' placeholder='Enter Tickets count' maxLength={1} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div>
                            <label className='form-label' htmlFor='question'>Write your question :</label>
                            <textarea class="form-control form-input" id="question" name="question" rows="3"></textarea>
                          </div>
                        </div>
                      </div>
                      <div className='my-3 d-block'>
                        <button type='button' className='btn w-md-25 btn-md btn-custom-secondary rounded-1'>Send Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-md-5">
          <div className="col-12">
            <h4 className="text-custom-primary">More Tour Package :</h4>
          </div>
        </div>
        <div className="row px-md-5 row-cols-4 g-3">
          <Tourcard image={tour_1image} tourname='Aegean Adventure' location='Venezia, Italy' starRating='4.4' reviewsCount='313' price='500.00' />
          <Tourcard image={tour_1image} tourname='Aegean Adventure' location='Venezia, Italy' starRating='4.4' reviewsCount='313' price='500.00' />
        </div>
        </>
        }
      </div>
      <Footer />
    </>
  )
}

export default Tourdetails;