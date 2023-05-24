import React from "react";
import "../index.css";
const Poster = () => {
  return (
    <>
      <div className="poster-container1"
      style={{ width: "100%", height: "70vh" ,marginTop: "50px"}}>
        <img className="img-home"
          src="https://images.pexels.com/photos/3865911/pexels-photo-3865911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Poster"
          style={{ width: "100%", height: "100%", objectFit: "none" }}
        />
      </div>
      <div className="content-home">
        <p>
          I recently had the pleasure of discovering WheelDeal, and I must say
          it has been an incredible experience! As an avid online shopper, I am
          always on the lookout for new and exciting ways to save money while
          indulging in my favorite products.<br/> WheelDeal has certainly exceeded my
          expectations.
        </p>
        <h4> - A Review by Anshu from New Delhi</h4>
      </div>
    </>
  );
};

export default Poster;
