
import React, { useContext, useEffect, useState } from "react";
import MessengerCustomerChat from 'react-messenger-customer-chat';

import "./App.css";
import { compareSameKey } from "./extensions/compareSameKey";
import { covertText } from "./extensions/covertText";
import Header from "./Components/Header/Header";
import BannerNoAction from "./Components/Banner/BannerNoAction";
import Footer from "./Components/Footer/Footer";
import CardDesignSecond from "./Components/Card/CardDesignSecond/CardDesignSecond";
import CardDesignThree from "./Components/Card/CardDesignThree/CardDesignThree";
import CardDesignFour from "./Components/Card/CardDesignFour/CardDesignFour";
import a1 from "./assets/image/a1.png";
import a2 from "./assets/image/a2.png";
import a3 from "./assets/image/a3.png";
import c1 from "./assets/image/c1.jpg";
import c2 from "./assets/image/c2.jpg";
import c3 from "./assets/image/c3.jpg";
import c4 from "./assets/image/c4.jpg";
import f1 from "./assets/image/f1.jpg";
import f2 from "./assets/image/f2.jpg";
import f3 from "./assets/image/f3.jpg";
import office from "./assets/image/j1.jpg";
import inventory from "./assets/image/j2.png";
import south from "./assets/image/j3.jpg";
import factory from "./assets/image/j4.jpg";
import Partner from "./Components/Partner/Partner";
import { RecruitContext } from "./hook/ContextRecruit";
function App() {
  const { data } = useContext(RecruitContext);
  
  const dataShare = [
    {
      image: c1,
      content:
        "Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...",
      link: "/",
    },
    {
      image: c2,
      content:
        "Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...",
      link: "/",
    },
    {
      image: c3,
      content:
        "Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...",
      link: "/",
    },
    {
      image: c4,
      content:
        "Không chú trọng kinh nghiệm chỉ cần bạn yêu thích phục vụ khách hàng và tận tâm với công việc được giao, trao quyền và...",
      link: "/",
    },
  ];
  const dataCard = [
    {
      image: f1,
      content: "Môi trường làm việc",
    },
    {
      image: f2,
      content: "Văn hoá doanh nghiệp",
    },
    {
      image: f3,
      content: "Chính sách phúc lợi & thăng tiến",
    },
  ];
  const imageConfig = (e) => {
    switch (e) {
      case "office":
        return office;
      case "inventory":
        return inventory;
      case "south":
        return south;
      case "factory":
        return factory;
      default:
        return south;
    }
  };
  return (
    <>
      <Header />
      <BannerNoAction />
      <div className="container" style={{ marginTop: "-100px" }}>
        <div
          className="row p-sm-3 p-lg-5 mx-auto"
          style={{
            backgroundColor: "#fff",
            boxShadow: "rgb(0 0 0 / 10%) 0 7px 7px",
          }}
        >
          {data.length &&
            compareSameKey(
              data.map((ele) => ({ title: ele.category, job: ele.name.name }))
            ).map((ele, index) => {
              return (
                <div className="col-md-6 col-lg-3 col-sm-12 mt-5" key={index}>
                  <CardDesignFour
                    title={covertText(ele.title)}
                    image={imageConfig(ele.title)}
                    dataJob={ele.job}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="container p-0" style={{ marginTop: "100px" }}>
        <div className="row mx-auto" style={{ minHeight: "350px" }}>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="" style={{ backgroundColor: "#ebeff0" }}>
              <h6 className="text-center p-3 text-uppercase">
                Thông điệp chào mừng ban lãnh đạo
              </h6>
              <div className="boxFeature">
                <div
                  className="thumnailBox"
                  style={{
                    backgroundImage: "url(" + a3 + ")",
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <div className="" style={{ backgroundColor: "#ebeff0" }}>
              <h6 className="text-center p-3 text-uppercase">
                Vinh danh nhân sự tiêu biểu
              </h6>
              <div
                className="boxFeature row m-0"
                style={{
                  background:
                    " linear-gradient(90deg, rgba(186,218,233,1) 0%, rgba(255,255,255,1) 59%, rgba(186,218,233,1) 100%)",
                }}
              >
                <div
                  className="col-6 p-0 position-relative thumnailBox"
                  style={{
                    backgroundImage: "url(" + a1 + ")",
                    backgroundPosition: "right",
                  }}
                >
                  <div
                    className="position-absolute d-flex justify-content-center align-items-center w-100 bg-white opacity-75"
                    style={{ height: "40px", bottom: "0" }}
                  >
                    <div className="me-2" style={{ fontSize: "10px" }}>
                      Hồ Chí Minh(15)
                    </div>
                    <div style={{ fontSize: "15px", fontWeight: "700" }}>
                      Nguyễn Thị Thơm
                    </div>
                  </div>
                </div>
                <div
                  className="col-6  p-0  position-relative thumnailBox"
                  style={{
                    backgroundImage: "url(" + a2 + ")",
                    backgroundPosition: "left",
                  }}
                >
                  <div
                    className="position-absolute d-flex justify-content-center align-items-center w-100 bg-white opacity-75"
                    style={{ height: "40px", bottom: "0" }}
                  >
                    <div style={{ fontSize: "15px", fontWeight: "700" }}>
                      Nguyễn Thị Thơm
                    </div>
                    <div className="ms-2" style={{ fontSize: "10px" }}>
                      Hồ Chí Minh(15)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3
          className="text-center title"
          style ={{marginTop: '5rem'}}
        >
          Điều gì hấp dẫn ở Diligo Holdings đang chờ đón bạn
        </h3>
        <div className="row mx-auto">
          {dataCard.map((ele, index) => {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 px-3 mt-5"
                key={index}
              >
                <CardDesignThree image={ele.image} content={ele.content} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container">
        <h3 className="text-center title" style={{ margin: "5rem 0 0" }}>
          Góc chia sẻ
        </h3>
        <div className="row mx-auto">
          {dataShare.map((ele, index) => {
            return (
              <div
                className="col-lg-3 col-md-6 col-sm-12 px-3 mt-5"
                key={index}
              >
                <CardDesignSecond
                  image={ele.image}
                  content={ele.content}
                  link={ele.link}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Partner />
      <div className="" style={{ marginTop: "100px" }}>
        <MessengerCustomerChat
          pageId="108253341849236"
          appId="719322076103425"
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
