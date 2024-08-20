import React from "react";
import { SplideSlide} from "@splidejs/react-splide";
import ProfilePic from '../Assets/hermione-1.jpg';
import { AiFillStar } from "react-icons/ai";

export default function Card(props)
{
  console.log(props.coverImg)
    return(

      <SplideSlide key={props.id}>
        <div className="testimonial-section-bottom" >
        <div className="testimonial-detail">
        <img src={ProfilePic} alt= {props.coverImg} />
        <div>
        <h2>{props.name}</h2>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        </div>
        </div>
        
        
        <p>
          {props.review}
        </p>
        
      </div>
      </SplideSlide>
    )
}