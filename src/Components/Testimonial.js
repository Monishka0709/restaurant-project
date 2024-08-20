import React from "react";
import data from "./data"
import Card from "./Card"
import { Splide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";




const Testimonial = () => {
  
  const reviewElement = data.map(item => {
    return <Card coverImg={item.coverImg} review={item.review} name ={item.name} key ={item.id} />
})
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Our service is highly appreciated by our loyal customers.
        </p>
      </div>
      <Splide>
      {reviewElement}
      </Splide>
    </div>
  );
};

export default Testimonial;
