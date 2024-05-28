
import React from "react";
import Header from "@components/header";
import Footer from "@components/footer";

const Members = () => {
  return (
    <>
      <Header />
      <div className="main_container">
        <div className="first_container">
          <img src="/members.png" />
        </div>
        <div className="second_container">
          <div className="cards_container">
            <div className="cards">
              <div className="head_part">
                <div className="type">
                  <h2>
                    Gold <br /> <span>Most Popular</span>
                  </h2>
                </div>
                <div className="box">
                  <h2>
                    ₹201 <br /> <span>1 month</span>
                  </h2>
                </div>
              </div>
              <hr />
              <div className="features_section">
              <div className="features">
                  <span>✔</span> <p> Every Month E-Book by WhatsApp & On E-mail.</p>
                </div>
                <div  className="features">
                  <span>✔</span> <p> Formate Sample of Profile.</p>
                </div>
                <div  className="features">
                  <span>✔</span> <p> Users Biodata Created by e-book.</p>
                </div>
                <div  className="features">
                  <span>✔</span> <p> Details of Used.</p>
                </div>
              </div>
              <div>
                <button className="btn">Get Started</button>
              </div>
            </div>
            <div className="cards">
              <div className="head_part">
                <div className="type">
                  <h2>
                    Diamond <br /> <span>Recommended</span>
                  </h2>
                </div>
                <div className="box">
                  <h2>
                    ₹401 <br /> <span>6 month</span>
                  </h2>
                </div>
              </div>
              <hr />
              <div className="features_section">
              <div className="features"> 
                  <span>✔</span> <p> Every Month E-Book by WhatsApp & On E-mail.</p>
                </div>
                <div className="features">
                  <span>✔</span> <p> Formate Sample of Profile.</p>
                </div>
                <div className="features">
                  <span>✔</span> <p> Users Biodata Created by e-book.</p>
                </div>
                <div className="features">
                  <span>✔</span> <p> Details of Used.</p>
                </div>
              </div>
              <div>
                <button className="btn">Get Started</button>
              </div>
            </div>
            <div className="cards">
              <div className="head_part">
                <div className="type">
                  <h2>
                    Platinum <br /> <span>Best Value</span>
                  </h2>
                </div>
                <div className="box">
                  <h2>
                    ₹501 <br /> <span>1 year</span>
                  </h2>
                </div>
              </div>
              <hr />
              <div className="features_section">
                <div className="features">
                  <span>✔</span> <p> Biodata Making.</p>
                </div>
                <div className="features">
                  <span>✔</span> <p> Highlight Biodata in Website.</p>
                </div>
                <div className="features">
                  <span>✔</span> <p> Jain Business Promotion.</p>
                </div>
                <div className="features">
                  <span>✔</span> <p> Above service Will Start By Office Contact Our Team.</p>
                </div>
              </div>
              <div>
                <button className="btn">Get Started</button>
              </div>
            </div>
          </div>

          <div className="banner">
            <h2>Your Story is waiting to happen!</h2>
            <button className="btn">Register Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Members;