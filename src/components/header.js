import React from "react";

const Header = () => {
  return (
    <div className="mt-4 text-center">
      <div className="d-print-flex mx-2 justify-content-center">
        <div className="d-none d-print-flex">
          <img className="head_img mt-2" src="/head.png" alt="" />
        </div>

        <div>
          <div className="d-flex flex-column justify-content-center text-center ">
            <p className="mt-2">உ</p>
            <p className="h6">அருள்மிகு வீரக்குமார் துணை</p>
          </div>
          <div>
            <p className="h3 heading text-danger">
              SHREE SABARI SASHTHA TRANSPORT
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <p className="w-100 mx-2">
              Shop No. 7, No. 1/4-A, Sri Lakshmi Complex, 1st Floor, Sakthi
              Theatre Road, Pichampalayam Pudur Post, Tirupur - 641602.
              TamilNadu, India.
            </p>
          </div>
        </div>
      </div>

      <div className="d-sm-flex justify-content-center mb-2">
        <p className="mx-3 h6">
          &nbsp; &nbsp; PH:9585007007 &nbsp; &nbsp; GSTIN:33CMPPP4728P1Z7
        </p>
        {/* <p className="h6"></p> */}
      </div>
      <div className=""></div>
    </div>
  );
};

export default Header;
