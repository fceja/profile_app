import React from "react";

import "../../../styles/components/contactInfo/ContactInfo.scss";
import GoogleMap from "../googleMap/GoogleMap";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <ul className="sections">
        <li className="sec-1">
          <li className="sec-1-img-container">
            <svg
              className='sec-1-icon'
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="#dbdbdb"
            >
              <style></style>
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
            <svg className="sec-1-circle-container" width={60} height={60}>
              <circle
                className="sec-1-circle"
                cx="30"
                cy="30"
                r="25"
                stroke="black"
                stroke-width="2"
              ></circle>
            </svg>
          </li>
          <li>(123) 123-4321</li>
        </li>
        <li className="section-2">
          <li>Email</li>
          <li>johnAdams@gmail.com</li>
        </li>
        <li className="section-3">
          <li>Social</li>
          <li className="section-3-items">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>
          </li>
        </li>
        <li>Serving the Los Angeles Area</li>
      </ul>
      <GoogleMap />
    </div>
  );
}
