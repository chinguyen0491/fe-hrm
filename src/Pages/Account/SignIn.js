import React, { Component, useState  } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Signin.css";
import styles from "./signin.module.css";
import logo from "../../assets/image/logo.png";
import { Helmet } from "react-helmet";

async function loginUser(credentials) {
  return fetch('http://test.diligo.vn:15000/api/auth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Signin({ setToken }) {
  const [db] = useState("hr_diligo");
  const [login, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      db,
      login,
      password
    });
    setToken(token);
  }

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
              <form method="POST" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form__field mb-2"
                  placeholder="Tên đăng nhập"
                  onChange={e => setUserName(e.target.value)}
                />
                <input
                  type="password"
                  className="form__field mb-2"
                  placeholder="Mật khẩu"
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="btn-submit d-flex justify-content-around">
                  <button
                    type="submit"
                    className={styles.btn + " " + styles.login}
                  >
                    Đăng nhập
                  </button>
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
  );
}

Signin.propTypes = {
  setToken: PropTypes.func.isRequired,
};
