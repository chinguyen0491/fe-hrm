import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Signin.css'
import styles from './signin.module.css'
import logo from '../../assets/image/logo.png'
import {Helmet} from "react-helmet";
export class Signin extends Component {
    render() {
        return ( 
               <section className="four-zero-four-section version-1">
               <Helmet>
                 <title>Đăng nhập</title>
               </Helmet>
        {/*======= Stars =======*/}
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column">
              <img className={styles.logo} src={logo} alt="Logo" />
              <h3 className={styles.title + " d-flex mb-5"}>Đăng nhập</h3>
              <div className="d-flex mb-5">
              <form action="/" method='POST'>
                <input type="text" className="form__field mb-2" placeholder="Tên đăng nhập"/>
                <input type="password" className="form__field mb-2" placeholder="Mật khẩu"/>
                <div className="btn-submit d-flex justify-content-around">
                  <button className={styles.btn +" "+ styles.login}>Đăng nhập</button>
                  <Link to="/" className={styles.link}><button className={styles.btn +" "+ styles.back}>Quay lại</button></Link>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div>
        <div className="small-planet-1" />
        <div className="small-planet-2" />
        <div className="small-planet-3" /> 
      </section> 
        )
    }
}

export default Signin
