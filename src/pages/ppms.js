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
    <div className="HeroPortfolio PPMSP">
      <div className="HeroGroup">
        <h1>
          PPMS <br /> Light
        </h1>
      </div>
    </div>

    <div className="IntroPorto">
      <div className="IntroPortoGroup">
        <img alt="toolslogo" src={require("../images/ppmsp.svg")} />
        <div className="IntroPortoTitle">
          <h2>Light and Bright for Everyone.</h2>
          <h5>SAP's Product and Production Management System </h5>
        </div>
      </div>
      <div className="WhiteBG">
        <div className="IntroPortoDetail">
          <div className="Group">
            <h6>teams info.</h6>
            <p>
              <Person
                link="ttps://people.wdf.sap.corp/profiles/D003563"
                name="Frank Imhof"
                job="Product Manager"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D032118"
                name="Matthias Kammerer"
                job="Support"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D027189"
                name="Bernd Falkenberg"
                job="Architect"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D027943"
                name="Veronika Wehrle"
                job="Architect"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D072602"
                name="Christian Schneider"
                job="Architect"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D050227"
                name="Jin Chen"
                job="Developer"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D035448"
                name="Gunnar Kiesewalter"
                job="Developer"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D065326"
                name="Pavel Komardin"
                job="Developer"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D027947"
                name="Christian Riedl"
                job="Developer"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D057129"
                name="Matthias Scudlik"
                job="Developer"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D023800"
                name="Gerhard Weigelt"
                job="Developer"
              />
              <br />
              <Person
                link="https://people.wdf.sap.corp/profiles/D020171"
                name="Nikola Freudensprung"
                job="UX Designer"
              />
            </p>
            <h6>tools links.</h6>
            <div className="ToolLinks">
              <a
                href="https://i7p.wdf.sap.corp/ppmslight/#/home"
                className="FusionLinks"
                target="_blank"
                rel="noopener noreferrer"
              >
                PPMS
              </a>{" "}
              <br />
              <a
                href="https://jam4.sapjam.com/groups/uH5dGdf6wJ0S9zC44tHNKb/overview_page/HYtusJWdsP46WIp7p8I5mi?edit_mode=true"
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
              The Product & Production Management System (PPMS) is the central
              master data repository for technical information on SAP software
              components and software products and the foundation for more than
              100+ internal and customer tools, services and processes. PPMS
              data and logic is monthly indirectly used by ~100.000 different
              users (SAP employees, Partners and Customers) via the connected
              tools and services.
            </p>
          </div>
        </div>
      </div>
      <div className="PortfolioGroup">
        <div className="Portfolio">
          <img alt="portfolio" src={require("../images/ppms1.jpg")} />
          <h5>Lightweight and simplified view on complex data</h5>
          <p>
            Modeling software can be a very complex story if you consider all
            relationships, dependencies, limitations, compliance and software
            delivery aspects. The PPMS Core application based on an historical
            UI once designed for professional power user was simply not designed
            and consumable for the growing number of thousands of occasional
            users. So we developed and design a simplified, lightweight and easy
            to consume application.
          </p>
          <h2>Designed for occasional users loved by the professionals .</h2>
          <img alt="portfolio" src={require("../images/ppms2.jpg")} />
          <p>
            For all devices: Our users can access with whatever device they want
            and with whatever browser they use
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
