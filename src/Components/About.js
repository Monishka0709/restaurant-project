import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <section className="about-section-container" >
      <div className="about-background-image-container">
        <img src={AboutBackground} className="about-background-image" alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Us</p>
        <h1 className="primary-heading">
          Enjoy continental food 
        </h1>
        <p className="primary-text">
        Explore curated lists of top restaurants, cafes, pubs, and bars in your locality, based on trends
        </p>
        <p className="primary-text">
          Unlock the taste of mouthwatering cuisines around you at your doorstep.
          We deliver the best quality food across India.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <a href="https://youtube.com" target="_blank"><BsFillPlayCircleFill /></a> Watch Video
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
