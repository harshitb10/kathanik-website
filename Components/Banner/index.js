import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styles from '../../styles/Home.module.css'
import style from './Banner.module.css'


export default function Banner() {
  return (
    <section id={style.header} className="d-flex align-items-center ">
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
              <img src="" className="rounded" alt="..." />
              <img src="" className="rounded" alt="..." />
              <img src="" className="rounded" alt="..." />

              <div className="mt-3"></div>
            </div>
            <div className="col-lg-6 order-2 order-lg-2 header-img">
              <h2 className={style.har}>पुस्तक सहज <br/>एकण्याचा आनंद घ्या <br/>कथानिक सोबत...</h2>
              <button type="button" class="btn btn-danger">
                जाणा कसं ते
              </button>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
    </section>




















  );
}
