import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  return (
    <div className="container-fluid nav_bg ">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-10 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
    
              <h1 className=" align-items-center  bold">
                आपल्या मोकळ्या वेळामध्ये वाचण्याचा, एकण्याचा आनंद घ्या कथानिक
                सोबत...
              </h1>
              <p>
                संत गजानन महाराज म्हणजे शेगावचे योगी. त्यांचा जीवन प्रवास
                भक्तांसाठी नेहमीच मार्गदर्शक असतो. यात ऐकुया त्यांची शिकवण आणि
                बरंच काही शिकवून जाणाऱ्या त्यांच्या कथा यात ऐकुया त्यांची शिकवण
                आणि बरंच काही शिकवून जाणाऱ्या त्यांच्या कथा
              </p>

              <div className="mt-3"></div>
            </div>
            <div className="col-lg-10 order-2 order-lg-2 d-flex justify-content-center">
              <div
                id="carouselExampleSlidesOnly"
                classname="carousel slide"
                data-bs-ride="carousel"
              >
                <div classname="carousel-inner">
                  <div classname="carousel-item active">
                    <img src="..." classname="d-block w-100" alt="..." />
                  </div>
                  <div classname="carousel-item">
                    <img src="..." classname="d-block w-100" alt="..." />
                  </div>
                  <div classname="carousel-item">
                    <img src="..." classname="d-block w-100" alt="..." />
                  </div>
                </div>
              </div>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
