import React from "react";
import "../index.css";

const Poster3 = () => {
  return (
    <div className="poster3-container">
      <div className="poster3-content">
        <div>
          <h4> Unbeatable Discounts Every Day</h4>
          <p>
            {" "}
            At WheelDeal, we bring you the excitement of new and exclusive deals
            every single day. Our Daily Deals feature ensures that you never
            miss out on incredible discounts on your favorite products. From
            fashion and electronics to home decor and more, our curated
            selection offers unbeatable prices that are hard to resist. With
            fresh deals added regularly, you can indulge in the thrill of
            discovering exciting savings on a wide range of items.
          </p>
        </div>
      </div>
      <div className="poster3-image">
        <img
          src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Image"
          className="photo2"
        />
      </div>
    </div>
  );
};

export default Poster3;
