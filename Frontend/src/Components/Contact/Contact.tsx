import React from "react";
import "./Contact.css";
import pf from "./pf.jpg";
import sf from "./sf.jpg";
import hm from "./hm.jpg";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const roundedImageStyle = {
  borderRadius: "50%",
  width: "150px", // Set the desired width
  height: "150px", // Set the desired height
};

const Contact: React.FC = () => {
  return (
    <section id="team">
      <h2
        className="text-center"
        style={{
          marginTop: "10px",
          fontWeight: "800",
          color: "#922c88",
          paddingLeft: "150px",
        }}
      >
        Our Team
      </h2>
      <div id="teammembers">
        <div className="pro-container" style={{ marginLeft: "130px" }}>
          <div className="pro">
            <img src={pf} alt="" />
            <div className="des">
              <h4>Daud Ahmed</h4>
              <div className="star"></div>
              <h5>Front End Developer</h5>
            </div>

            <ul className="team-icon">
              <li>
                <a
                  href="https://instagram.com/daud.ahmed.khattak?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="
                  className="instagram"
                >
                  <i className="fa fa-instagram"></i>
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/rebel.yt.1612/"
                  className="facebook"
                >
                  <i className="fa fa-facebook"></i>
                  <FaFacebook />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/daud-ahmed-560548255"
                  className="linkdin"
                >
                  <i className="fa fa-Linkdin"></i>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pro-container" style={{ marginLeft: "50px" }}>
          <div className="pro">
            <img src={sf} alt="" />
            <div className="des">
              <h4>Saifullah Omar</h4>
              <div className="star"></div>
              <h5>Smart Contract</h5>
            </div>
            <ul className="team-icon">
              <li>
                <a
                  href="https://www.instagram.com/xmrsaifx/?igshid=NzZhOTFlYzFmZQ%3D%3D"
                  className="instagram"
                >
                  <i className="fa fa-instagram"></i>
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/sai.fi.102"
                  className="facebook"
                >
                  <i className="fa fa-facebook"></i>
                  <FaFacebook />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/saifullah-omar-120b721a2"
                  className="Linkdin"
                >
                  <i className="fa fa-Linkdin"></i>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pro-container" style={{ marginLeft: "50px" }}>
          <div className="pro">
            <img src={hm} alt="" />
            <div className="des">
              <h4>Muhammad Hamdan Habib</h4>
              <div className="star"></div>
              <h5>Back End Developer</h5>
            </div>
            <ul className="team-icon">
              <li>
                <a
                  href="https://instagram.com/muhammadhamdan_20?igshid=OGQ5ZDc2ODk2ZA=="
                  className="instagram"
                >
                  <i className="fa fa-instagram"></i>
                  <FaInstagram />
                </a>
              </li>

              <li>
                <a href="#" className="facebook">
                  <i className="fa fa-facebook"></i>
                  <FaFacebook />
                </a>
              </li>

              <li>
                <a href="#" className="twiter">
                  <i className="fa fa-twiter"></i>
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
