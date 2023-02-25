import React from 'react'
import AnimatedNumbers from "react-animated-numbers";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import client from '../../../images/statistics/clients.png'
import eng from '../../../images/statistics/eng.png'
import city from '../../../images/statistics/city.png'
import styles from "./Statistics.module.css";

function Statistics(props) {
  // const [num, setNum] = React.useState(25);
  return (
    <div className={styles.statistics + " col-12 green-bor"} id="stat">

    <div className='row'>
    <div className={" col-6 col-md-3 d-flex justify-content-center align-items-center black-bor flex-column item " + styles.container}>
    <div className={styles.img_box}><img src="https://www.freeiconspng.com/uploads/slide2-house-9.png" className={'img-fluid ' + styles.img1 } alt="House Designs Png" /></div>
    
      <div className={styles.num}>
      <AnimatedNumbers
        includeComma
        animateToNumber={9}
        fontStyle={{ fontSize: 40 }}
        locale="en-US"
        configs={[
          { mass: 1, tension: 280, friction: 150 },
        ]}
      ></AnimatedNumbers>
      </div>
      <p className={styles.para}>Houses Built</p>
    </div>

    <div className={" col-6 col-md-3 d-flex justify-content-center align-items-center black-bor flex-column item2 " + styles.container}>
    <div className={styles.img_box}><img src={client} className={'img-fluid ' + styles.img2 } alt="House Designs Png" /></div>
    
      <div className={styles.num}>
      <AnimatedNumbers
        includeComma
        animateToNumber={29}
        fontStyle={{ fontSize: 40 }}
        locale="en-US"
        configs={[
          { mass: 1, tension: 280, friction: 150 },
        ]}
      ></AnimatedNumbers>
      </div>
      <p className={styles.para}>Happy Clients</p>
    </div>

    <div className={" col-6 col-md-3 d-flex justify-content-center align-items-center black-bor flex-column item " + styles.container}>
    <div className={styles.img_box}><img src={eng} className={'img-fluid ' + styles.img3 } alt="House Designs Png" /></div>
    
      <div className={styles.num}>
      <AnimatedNumbers
        includeComma
        animateToNumber={14}
        fontStyle={{ fontSize: 40 }}
        locale="en-US"
        configs={[
          { mass: 1, tension: 280, friction: 150 },
        ]}
      ></AnimatedNumbers>
      </div>
      <p className={styles.para}>Engineers</p>
    </div>

    <div className={" col-6 col-md-3 d-flex justify-content-center align-items-center black-bor flex-column item " + styles.container}>
    <div className={styles.img_box}> <img src={city} className={'img-fluid ' + styles.img4 } alt="House Designs Png" /></div>
   
      <div className={styles.num}>
      <AnimatedNumbers
        includeComma
        animateToNumber={3}
        fontStyle={{ fontSize: 40 }}
        locale="en-US"
        configs={[
          { mass: 1, tension: 280, friction: 150 },
        ]}
      ></AnimatedNumbers>
      </div>
      <p className={styles.para}>City Served</p>
    </div>
    </div>

      
  
    </div>
  );
}

export default Statistics;
