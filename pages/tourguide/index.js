import Header from "@/components/Header";
import Pagebanner from "@/components/Pagebanner";
import bannerImg from '@/assets/map.jpg';
import Guide from "@/components/Guide";
import img from '@/assets/user.jpg';
import Footer from "@/components/Footer";

const Tourguide = () => {
  return(
    <>
      <Header />
      <div className="container">
        <Pagebanner link='Tour Gudide' image={bannerImg} title="Meet Our Excellent Guide's" />
        <div className="row row-cols-md-4 row-cols-1 g-3 justify-content-center mb-4">
          <Guide image={img} name='Jane Cooper' description='Some quick example text to build on the card title.' />
          <Guide image={img} name='Jane Cooper' description='Some quick example text to build on the card title.' />
          <Guide image={img} name='Jane Cooper' description='Some quick example text to build on the card title.' />
          <Guide image={img} name='Jane Cooper' description='Some quick example text to build on the card title.' />
          <Guide image={img} name='Jane Cooper' description='Some quick example text to build on the card title.' />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Tourguide;