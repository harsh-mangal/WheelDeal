import React from "react";
import "./SpinWheel.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SpinWheel = () => {
  const spin = () => {
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    const shuffle = (array) => {
      let currentIndex = array.length,
        randomIndex;

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    };

    // Play the sound
    // wheel.play(); // Assuming you have a sound element with id 'wheel'

    let MagicRoaster = shuffle([1890, 2250, 2610]);
    let Sepeda = shuffle([1850, 2210, 2570]);
    let RiceCooker = shuffle([1810, 2170, 2530]);
    let LunchBox = shuffle([1770, 2130, 2490]);
    let Sanken = shuffle([1750, 2110, 2470]);
    let Electrolux = shuffle([1630, 1990, 2350]);
    let JblSpeaker = shuffle([1570, 1930, 2290]);

    let Hasil = shuffle([
      MagicRoaster[0],
      Sepeda[0],
      RiceCooker[0],
      LunchBox[0],
      Sanken[0],
      Electrolux[0],
      JblSpeaker[0],
    ]);

    // get the value of selected item
    if (MagicRoaster.includes(Hasil[0])) SelectedItem = "20% Discount";
    if (Sepeda.includes(Hasil[0])) SelectedItem = "Bad Luck!";
    if (RiceCooker.includes(Hasil[0])) SelectedItem = "Try Again";
    if (LunchBox.includes(Hasil[0])) SelectedItem = "Free Airpods";
    if (Sanken.includes(Hasil[0])) SelectedItem = "20% Discount";
    if (Electrolux.includes(Hasil[0])) SelectedItem = "one more chance";
    if (JblSpeaker.includes(Hasil[0])) SelectedItem = " 2 Free Service";

    // spin
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + Hasil[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
      element.classList.add("animate");
    }, 5000);

    // alert
    setTimeout(function () {
      // applause.play(); // Assuming you have a sound element with id 'applause'
      alert("Congratulations! You won the " + SelectedItem + ".");
    }, 5500);

    // delay
    setTimeout(function () {
      box.style.setProperty("transition", "initial");
      box.style.transform = "rotate(90deg)";
    }, 6000);
  };

  return (
    <>
     <Navbar/>
      <div className="spin-main-box">
        <p className="p-w">Welcome to wheelDeal!</p>
        <div className="mainbox" id="mainbox">
          <div className="box" id="box">
            <div className="box1">
              <span className="font span1">
                <b>20% Discount</b>
              </span>
              <span className="font span2">
                <b>Bad Luck!</b>
              </span>
              <span className="font span3">
                <b>Try Again</b>
              </span>
              <span className="font span4">
                <b>Free Airpods</b>
              </span>
              <span className="font span5">
                <b>
                  100 Rs
                  <br />
                  Voucher
                </b>
                <br />
              </span>
            </div>
            <div className="box2">
              <span className="font span1">
                <b>one more chance</b>
              </span>
              <span className="font span2">
                <b>2 Free Service</b>
              </span>
              <span className="font span3">
                <b>Ipad Mini 4</b>
              </span>
              <span className="font span4">
                <b>Exclusive Gift</b>
              </span>
              <span className="font span5">
                <b>Try Again</b>
              </span>
            </div>
          </div>
          <button className="spin" onClick={spin}>
            SPIN
          </button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SpinWheel;
