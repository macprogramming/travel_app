import Image from "next/image";
import img from '@/assets/user.jpg';
const Guide = (props) => {
  return(
    <>
      <div className="col">
        <div className="card rounded-0 border-0 shadow-lg">
          <Image src={props.image} className="img img-fluid card-img-top rounded-0" />
          <div className="card-body">
            <h6 className="card-title text-custom-secondary">Tour Guide</h6>
            <h4 className="text-custom-primary">{props.name}</h4>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Guide;