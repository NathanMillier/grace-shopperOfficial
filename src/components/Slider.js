import React from "react";

const Slider = () => {
  return (
    <div className="sliderCont">
      <div className="arrowCont">
        <div className="arrowLeft">{/* <ArrowLeftOutlined /> */}</div>

        <div className="slideShow">
          <div className="slide">
            <div className="slideImg">
              <img
                src="C:\Users\AMPer\Desktop\react_ecomm\images\womanShopper.png"
                alt=""
              />
            </div>
            <div className="slideInfo">
              <h1>SUMMER SALE</h1>
              <p>ALL THE LATEST TRENDS! GET 30% OFF NEW ARRIVALS.</p>
              <button>SHOW NOW!</button>
            </div>
          </div>
          <div className="slide">
            <div className="slideImg">
              <img
                src="C:\Users\AMPer\Desktop\react_ecomm\images\womanShopper3.png"
                alt=""
              />
            </div>
            <div className="slideInfo">
              <h1>SUMMER SALE</h1>
              <p>DON'T COMPRIMISE ON STYLE! GET 30% OFF NEW ARRIVALS.</p>
              <button>SHOW NOW!</button>
            </div>
          </div>
          <div className="slide">
            <div className="slideImg">
              <img
                src="C:\Users\AMPer\Desktop\react_ecomm\images\womanShopper2.png"
                alt=""
              />
            </div>
            <div className="slideInfo">
              <h1>SUMMER SALE</h1>
              <p>DON'T COMPRIMISE ON STYLE! GET 30% OFF NEW ARRIVALS.</p>
              <button>SHOW NOW!</button>
            </div>
          </div>
        </div>
        <div className="arrowRight">{/* <ArrowRightOutlined /> */}</div>
      </div>
    </div>
  );
};

export default Slider;
