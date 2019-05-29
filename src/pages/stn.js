import React from "react";
import "./portfolio.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "gatsby";
import { genericHashLink } from "react-router-hash-link";

const HashLink = props => genericHashLink(props, Link);

const IndexPage = () => (
  <div>
    <Header />
    <div className="HeroPortfolio STNP">
      <div className="HeroGroup">
        <h1>SAP Transformation Navigator</h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/stn.svg")} />
        <div className="IntroPortoTitle">
          <h2>Clear Guidance to the Intelligent Enterprise.</h2>
          <h5>
            How we help customers to get just the right SAP products and
            solutions.
          </h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              <span>
                <a
                  href="https://people.wdf.sap.corp/profiles/D029110"
                  className="FusionLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Susanne Schneider
                </a>{" "}
                – Product Owner
              </span>
              <br />
              STN Development Team
              {/*  
              <br />
              Timo Bergmann – Architect
              <br />
              Christian Riedl – Developer
              <br />
              Fabian Hilz – Developer
              <br />
              Laurens von Assel – Developer
              <br />
              Osman Can Arikan – Developer
              <br />
              Nancy Kunath – Developer
              <br />
              Simon Nilius – Developer
              <br />
              */}
              <br />
              <span>
                <a
                  href="https://people.wdf.sap.corp/profiles/D072428"
                  className="FusionLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Astrid Kadel
                </a>{" "}
                – UX/UI Designer{" "}
              </span>
              <br />
              <span>
                <a
                  href="https://people.wdf.sap.corp/profiles/D020171"
                  className="FusionLinks"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nikola Freudensprung
                </a>{" "}
                – UX/UI Designer{" "}
              </span>
            </p>
            <h6>tools links.</h6>
            <div className="ToolLinks">
              <a
                href="https://go.support.sap.com/transformationnavigator/#/welcome"
                className="FusionLinks"
                target="_blank"
                rel="noopener noreferrer"
              >
                SAP Transformation Navigator
              </a>{" "}
              <br />
              <a
                href="https://jam4.sapjam.com/groups/uH5dGdf6wJ0S9zC44tHNKb/overview_page/ihnWImfd3sP8dJMNTeSEN5?edit_mode=true"
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
              With lots of products and solutions on the SAP portfolio, it can
              be a hard task for our customers to just find and pick the right
              ones for the future. What if we could help them with this task?
              What if we could guide them through our vast landscape of products
              and give them clear recommendations?
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/stn1.jpg")} />
          <h5>Giving you the compass you needed.</h5>
          <p>
            SAP Transformation Navigator is a self-service tool for all SAP
            customers and partners. It helps them to become Intelligent
            Enterprises by providing product recommendations and guidance for
            their way into a digital future. In short words – just add the
            products you are currently running and the tool recommends you the
            best replacement products and shows how they evolve over time.
          </p>
          <h2>
            With{" "}
            <b>
              <u>SAP Transformation Navigator</u>
            </b>
            , customers can quickly see their product recommendations and how
            they evolve over time.
          </h2>
          <img alt="portfolio" src={require("../images/stn2.jpg")} />
          <p>
            The heart of the SAP Transformation Navigator is the Product Map
            where customers can see their product recommendations.
          </p>
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
