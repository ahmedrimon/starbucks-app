import React from "react";

import one from "../../../images/one.jpg";
import two from "../../../images/two.jpg";
import three from "../../../images/three.jpg";
import StartedData from "../StartedData/StartedData";

const startedData = [
  {
    images: one,
    title: "Create an account",
    description:
      "To get started, You can also join in the app to get access to the full range of Starbucks® Rewards benefits.",
  },
  {
    images: two,
    title: "Order and pay how you’d",
    description: "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how",
  },
  {
    images: three,
    title: "Earn Stars, get Rewards",
    description: "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!",
  },
];

const Started = () => {
  return (
    <div style={{ fontSize: "1.2rem" }} className="text-center mt-5">
      <h2 style={{ fontWeight: "bold" }}>Getting started is easy</h2>
      <p style={{ fontWeight: "italic" }}>
        Earn Stars and get rewarded in a few easy steps.
      </p>
      <div className="container d-flex justify-content-center">
        {
            startedData.map((start) => (<StartedData start={start}></StartedData>))
        }
      </div>
    </div>
  );
};

export default Started;
