import Header from "@/components/Header";
import Pagebanner from "@/components/Pagebanner"
import bannerImg from '@/assets/tour_banner.jpg';
import Image from "next/image";
import tour_1image from '@/assets/tour_1.jpeg';
import Contactform from "@/components/Contactform";
import Travelcategory from "@/components/Travelcategory";
import Tourlist from "@/components/Tourlist";
import { useState } from "react";
import Destinationcard from "@/components/Destinationcards";
import Footer from "@/components/Footer";

const Destination = () => {
  const [viewDestination, setViewDestination] = useState(false)
  return(
    <>
      <Header />
      <div className="container">
        {
          !viewDestination ?
            <>
              <Pagebanner link='Destination' image={bannerImg} title="Find Your Desire Destination" />
              <div className="row">
                <Destinationcard />
              </div>
            </>
          :
          <>
            <Pagebanner link='Destination Details' image={bannerImg} title="The beauty of paris" />
            <div className="row px-md-5">
              <div className="col-12 col-md-7">
                <div>
                  <h4 className="text-custom-primary">Visiting the Eiffel Tower</h4>
                  <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  <Image src={tour_1image} className="img img-fluid" />
                </div>
                <div className="py-3">
                  <h4 className="text-custom-primary">More Details</h4>
                  <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                </div>
                <div>
                  <h4 className="text-custom-primary">Good to Know :</h4>
                  <h6 className="text-custom-primary">Read the basic info and also some fun acts about Eiffel Tower! Here you will find everything you should know about the Land of Plenty!</h6>
                  <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                  
                  <div className="my-2">
                    <h4 className="text-custom-primary">Feel Free Ask This Place :</h4>
                    <Contactform />
                  </div>
                </div>
              </div>
              <div className="col col-md-5">
                <Tourlist />
                <Travelcategory />
              </div>
            </div>
          </>
        }
      </div>
      <Footer />
    </>
  )
}

export default Destination;