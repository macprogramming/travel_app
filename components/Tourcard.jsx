import Image from "next/image";
import StarIcon from '@mui/icons-material/Star';
import { useRouter } from "next/router";

const Tourcard = (props) => {
  let router = useRouter();
  const getTourdetails = () => {
    router.push('/tourdetails')
  }
  return(
    <>
      <div className="col" onClick={getTourdetails}>
        <div className="card rounded-0 border-0 shadow-lg">
          <Image src={props.image} className="img img-fluid card-img-top rounded-0" />
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <div>
                <StarIcon htmlColor="#ffb900" />&nbsp;<small className="text-secondary">{props.starRating}&nbsp;({props.reviewsCount}&nbsp;Reviews)</small>
              </div>
              <div>
                <small className="text-custom-primary fw-bold">From</small>&nbsp;<span className="fw-bold text-custom-secondary">&#36;{props.price}</span>
              </div>
            </div>
            <h5 className="text-custom-primary">{props.tourname}</h5>
            <p className="card-text">{props.location}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tourcard;