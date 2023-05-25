import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css";

const MyCarousel = () => {
  return (
    <Carousel
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      autoPlay
      interval={2000}
    >
      <div>
        <img
          src="https://images.pexels.com/photos/5709224/pexels-photo-5709224.jpeg"
          alt="Image 1"
        />

        <div className="carousel-content">
          <h1>WheelDeal - Spin & Win Discounts!</h1>
          <p>
            WheelDeal is an exciting online spin wheel website that offers users
            the opportunity to win fantastic discounts on a wide range of
            products and services.
            <br /> With its engaging interface and thrilling gameplay, WheelDeal
            brings a new level of excitement to the world of online shopping.
          </p>
          <button className="spin-button">
            <a href="/spin" className="spin-a">Let's Spin</a>
            {/* <span className="button-text">Let's Spin</span> */}
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/4127632/pexels-photo-4127632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 2"
        />
        <div className="carousel-content">
          <h1>Elevate Your Shopping Experience with Every Spin!</h1>
          <p>
            At WheelDeal, we believe that shopping should be an adventure.{" "}
            <br />
            With every exhilarating spin, you'll not only discover incredible
            discounts but also elevate your shopping experience to new heights.
            <br />
            Brace yourself for a thrilling journey filled with surprises and
            unbeatable deals.
          </p>
          <button className="spin-button">
            <a href="/spin" className="spin-a">Let's Spin</a>
            {/* <span className="button-text">Let's Spin</span> */}
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/7319127/pexels-photo-7319127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image 3"
        />
        <div className="carousel-content">
          <h1>A World of Discounts Awaits You at Every Turn!</h1>
          <p>
            Step into a world where every turn of the WheelDeal brings forth a
            world of exclusive discounts and irresistible offers. <br /> From
            jaw-dropping price cuts to limited-time promotions, our spin wheel
            is your gateway to a treasure trove of savings.
            <br /> Get ready to embark on an epic discount-hunting journey!
          </p>
          <button className="spin-button">
            <a href="/spin" className="spin-a">Let's Spin</a>
            {/* <span className="button-text">Let's Spin</span> */}
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
