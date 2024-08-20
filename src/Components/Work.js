import React from "react";
import PickMeals from "../Assets/10626330 (2).jpg";
import ChooseMeals from "../Assets/Sandy_Agr-01_Single-09-1.jpg";
import DeliveryMeals from "../Assets/6240226 (1).png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Order Online",
      text: "Stay home and order at your doorstep ",
    },
    {
      image: ChooseMeals,
      title: "Hygienic Meals",
      text: "Quality of the food has been taken care of",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Guaranteed delivery in 30 minutes. Otherwise, you get complete refund.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Discover the ecstasy of tasting variety of your favourite food at the comfort of your home.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
