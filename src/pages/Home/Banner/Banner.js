import Typewriter from "typewriter-effect";
import styles from "./Banner.module.css";

function Banner(props) {
  return (
    <div className={styles.banner}>
      <div className="col-12 black-bor">
        {/* <div className={styles.text}>
          <div className="row  ">
            <div
              className={
                styles.static + " col-4 green-bor d-flex justify-content-end"
              }
            >
              We
            </div>
            <div
              className={
                styles.dynamic + " col-6 green-bor d-flex justify-content-start"
              }
            >
              <Typewriter
                options={{
                  strings: ["Design!", "Innovate!", "Built!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <div className={styles.detail}>props</div>
        </div> */}
        <div className={styles.text}>
          <div className="row  ">
            <div className={styles.static + " col-12 green-bor"}>
            <p className={styles.static}>We &nbsp;</p>
            <p className={styles.dynamic}><Typewriter
              options={{
                strings: ["Design!", "Innovate!", "Built!"],
                autoStart: true,
                loop: true,
              }}
            /></p> 
           
            </div>{" "}
            <div className="col-12 col-md-6 green-bor">
            <p className={styles.detail }>One stop Solution for building or renovating their homes. <br />We provide a full range of services, including architecture design, plumbing, electrical work, and carpentry.</p>
            </div>
            <div className={" col-12 green-bor"}>
           <div className={styles.action}>
           <a href="https://wa.me/+917870565464">Book Service</a>
           </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
