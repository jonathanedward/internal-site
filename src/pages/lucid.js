import React from "react";
import "./portfolio.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "gatsby";
import { genericHashLink } from "react-router-hash-link";
import Person from "../components/person";

const HashLink = props => genericHashLink(props, Link);

const IndexPage = () => (
  <div>
    <Header />
    <div className="HeroPortfolio LUCP">
      <div className="HeroGroup">
        <h1>Lucid</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/lucidp.svg")} />
        <div className="IntroPortoTitle">
          <h2>Capacity management you will love.</h2>
          <h5>
            How we help managers to keep transparency along their employees.
          </h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              <Person
                link="https://people.wdf.sap.corp/profiles/D062131"
                name="Roman Kostka"
                job="Product Manager"
              />
              <br /> Lucid Development Team <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/I343875"
                name="Abhinav Gupta"
                job="UX Designer"
              />
            </p>
            <h6>tools links.</h6>
            <div className="ToolLinks">
              <a
                href="https://ifp.wdf.sap.corp/lucidcapacity/default.htm?sap-sessioncmd=open#/"
                className="FusionLinks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucid
              </a>{" "}
              <br />
              <a
                href="https://jam4.sapjam.com/groups/uH5dGdf6wJ0S9zC44tHNKb/overview_page/amYoi3xp1c0uWxYCWfjTQV?edit_mode=true"
                className="FusionLinks"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tool SAP JAM Link
              </a>
            </div>
          </div>
          <div className="Brief">
            <h6>the brief.</h6>
            <p>
              The bigger the company - the bigger the challenge to keep
              transparency along capacity management. With Lucid Capacity we
              help managers and their substitutes to get a clear picture on who
              is working on what.
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/lucid1.jpg")} />
          <h5>Lucid Capacity is designed for awesomeness.</h5>
          <p>It was never so simple to keep track of capacity management.</p>
          <img alt="portfolio" src={require("../images/lucid2.jpg")} />
        </div>
      </div>
      <HashLink smooth to="/#works" className="Links">
        <div className="BackButton">
          <img alt="arrow" src={require("../images/arrowb.svg")} />
          <p>See Other Tools</p>
        </div>
      </HashLink>
    </div>

    <Footer />
  </div>
);

export default IndexPage;
