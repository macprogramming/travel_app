import Image from "next/image";
import bannerImage from '@/assets/banner_image.svg'
const Banner = () => {
  return(
    <>
      <div className="row position-relative my-5">
        <div className="col-md-12">
          <Image src={bannerImage} className="img img-fluid" />
        </div>
        <div className="col-md-10 offset-md-1 position-absolute bottom-custom-center">
        <div className="card border-0 rounded-2 shadow-lg">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-3 border-end">
                <h1 className="m-0 text-custom-primary">Take The Best Place</h1>
              </div>
              <div className="col-md-7">
                <p className="m-0 text-secondary">
                Plan a perfect getway in a place where the sun shines all year. Explore pristine beaches, enjoy relaxed activities, and pamper yourself at the many wellness retreats
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Banner;