import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { useState } from "react";

import NavItem from "./NavItem";
import logo from "../../images/logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [dopened, setDopened] = useState(false);
  
  function DopenHandeler(){
    { dopened && setDopened(false)}
  }

  return (
    <React.Fragment>
    
    <div className="container-fluid black-bor nav">
      <div className="row">
        <div className="main blue-bor d-flex align-items-center">
          
          <div className="left green-bor">
            <div className="d-flex box align-items-center">
              <div className="logo">
                <img src={logo} />
              </div>
              <h5 className="title">Homenity</h5>
            </div>
          </div>
          <div className="right green-bor">
            <div className="d-flex justify-content-end">
              <div className="hamburger" onClick={() => {setDopened(!dopened)}}>
                <FontAwesomeIcon icon={solid("bars")} />
              </div>
              <NavItem />
            </div>
          </div>
        </div>
      </div>
    </div>

    { dopened ? <div className="drawer blue-bor">
    <br />
            <NavItem DopenHandeler={DopenHandeler} />
          </div> : null}
    </React.Fragment>
  );
}
