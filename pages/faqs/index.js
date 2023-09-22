import Header from "@/components/Header";
import Pagebanner from "@/components/Pagebanner";
import bannerImg from '@/assets/tour_banner.jpg';
import Footer from "@/components/Footer";
import Travelcategory from "@/components/Travelcategory";
import Tourlist from "@/components/Tourlist";

const Faqs = () => {
  return(
    <>
      <Header />
      <div className="container mb-5">
        <Pagebanner link='FAQs' image={bannerImg} title="If you have any question" />
        <div className="row px-md-5">
          <div className="col-md-7 col-12">
            <div className="accordion" id="accordionFaqs">
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Whya are your tours so expensive?
                  </button>
                </h5>
                <div id="collpaseOne" className="accordion-collapse collapse show" data-bs-parent="accordionFaqs">
                  <div className="accordion-body">
                    <p className="m-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h5 className="accordion-header" id="headingTwo">
                  <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    How will contact with us?
                  </button>
                </h5>
                <div id="collapseTwo" className="accordion-collapse collapse">
                  <div className="accordion-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                      text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <Tourlist />
          </div>
        </div>
        <div className="row px-md-5 px-sm-0">
          <div className="col-md-7 col-12">
            <h3 className="text-custom-primary my-4">Feel Free Ask This Place :</h3>
            <div className="card">
              <div className="card-body">
                <form className='needs-validation' novalidate method='POST'>
                  <div className='row g-3'>
                    <div className="col-12 col-md-6">
                      <div className='has-validation'>
                        <label className='form-label' htmlFor='yourname'>Your Name :</label>
                        <input className='form-control form-input has-validation' type='text' name="yourname" id="yourname" placeholder='Enter your name' required />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div>
                        <label className='form-label' htmlFor='phone'>Your Phone :</label>
                        <input className='form-control form-input' type='text' name="phone" id="phone" placeholder='Enter your phone' />
                      </div>
                    </div>
                    <div className="col-12">
                      <div>
                        <label className='form-label' htmlFor='subject'>Subject :</label>
                        <input className='form-control form-input' type='text' name="subject" id='subject' placeholder='Enter subject' />
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
                    <button type='button' className='btn w-md-25 btn-md btn-custom-primary'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-12">
            <Travelcategory />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Faqs;