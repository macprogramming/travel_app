import Image from "next/image";
const Pagebanner = (props) => {
  return(
    <>
      <div className="row my-5">
        <div className="col-12">
          <div className="image-header px-0 mx-0">
            <span className="content-span"></span>
            <Image src={props.image} className="img img-fluid w-100 h-100" />
            <div className="position-absolute">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item text-white"><a href="/" className="text-white">Home</a></li>
                  <li class="breadcrumb-item active text-white" aria-current="page">{props.link}</li>
                </ol>
              </nav>
              <h1 className="text-white text-capitalize">{props.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pagebanner;