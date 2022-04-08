import React, { useContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
import styles from "./main.module.css";
import Info from "./Info";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { RecruitContext } from "../../hook/ContextRecruit";
import ContentItem from "./ContentItem";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Detail() {
  const id = useLocation().search.replace("?", "");
  const [mainData, setMainData] = useState();
  const { data } = useContext(RecruitContext);
  useEffect(() => {
    const findData = data.find((val) => {
      return +id === val.id;
    });
    if (findData) {
      setMainData(findData);
    }
  }, [data]);
  return (
    <>
      <Header />
      <BannerNoAction />
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4 col-sm-12 mb-sm-5 mb-lg-0">
            {mainData && <Info mainData={mainData} />}
          </div>
          {mainData && (
            <div
              className="col-lg-8 col-sm-12"
              style={{ fontSize: "1rem", lineHeight: "2rem" }}
            >
              <div className={styles.video}>
                <video
                  controls
                  src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2020/12/Eduma-Preview.mp4"
                  autoPlay
                  muted
                />
              </div>
              {mainData.description && mainData.description.replace(/<[^>]*>?/gm, '').trim() !== ""  && (
                <ContentItem
                  title={"Mô tả công việc"}
                  desc={mainData.description}
                />
              )}
              {mainData.require && mainData.require.replace(/<[^>]*>?/gm, '').trim() !== "" && (
                <ContentItem
                  title={"Yêu cầu công việc"}
                  desc={mainData.require}
                />
              )}
              {mainData.exp.length > 0 && (
                <ContentItem
                  title={"Kinh nghiệm"}
                  content={Array.isArray(mainData.exp) ? mainData.exp.map(val => val.value) : mainData.exp }
                />
              )}
              {mainData.welfare.length > 1 && (
                <ContentItem
                  title={"Quyền lợi"}
                  content={mainData.welfare.map((val) => val.name)}
                />
              )}
              <div className="my-5">
                <h3 className={styles.content__title}>Địa chỉ công ty</h3>
                <FormControl style={{ margin: "2rem 0" }}>
                  <InputLabel>Địa chỉ</InputLabel>
                  <Select style={{ minWidth: 200 }}>
                    <MenuItem value={"hanoi"}>Hà nội</MenuItem>
                    <MenuItem value={"hochiminh"}>Hồ Chí Minh</MenuItem>
                  </Select>
                </FormControl>
                <div className="my-2">
                  <input
                    type="checkbox"
                    value={true}
                    style={{ width: "max-content" }}
                  />{" "}
                  Địa điểm gần bạn
                </div>
                <ContentItem
                  content={[
                    "Tầng 2, Toà nhà N03T5, Khu Đoàn ngoại giao, Phường Xuân Tảo, Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam.",
                    "Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp. Hồ Chí Minh",
                  ]}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Detail;
