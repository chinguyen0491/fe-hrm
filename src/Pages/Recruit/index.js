import React, { useState, useContext } from "react";
import styles from "./Recruit.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
import banner from "../../assets/image/banner-04.jpg";
import Tabs from "./Tabs";
import LineInfor from "./LineInfor";
import { SelectPicker } from "rsuite";
import { sortByKey } from "../../extensions/sortKey";
import CloseIcon from '@mui/icons-material/Close';
import { useLocation, useHistory } from 'react-router-dom'
import { RecruitContext } from '../../hook/ContextRecruit'
import { toSlug } from '../../extensions/toSlug'
import Details from '../DetailJob'
function Index() {
  let location = useLocation();
  let history = useHistory();
  const { data, category, setCategory, setKeySearch, keySearch } = useContext(RecruitContext)
  const sortOptions = [
    {
      label: "Độ ưu tiên",
      value: "status",
    },
    {
      label: "Lương",
      value: "salary",
    },
    {
      label: "Ngày hết hạn",
      value: "deadline",
    },
    {
      label: "Số lượng tuyển",
      value: "number",
    },
  ];
  const [optionSort, setOptionSort] = useState("");
  const [dataHandle, setDataHandle] = useState([]);
  React.useEffect(() => {
    setDataHandle(
      keySearch === '' ? data : data.filter((o) => toSlug(o.industry.name) === keySearch)
    );
  }, [keySearch, data]);

  React.useEffect(() => {
    if (optionSort !== "") {
      setDataHandle(sortByKey(dataHandle, optionSort));
    } else {
      setDataHandle(
        keySearch === "/tuyen-dung"
          ? data
          : data.filter((o) => toSlug(o.industry.name) === keySearch)
      );
    }
    // eslint-disable-next-line
  }, [optionSort, data]);
  React.useEffect(() => {
    setKeySearch(location.pathname.replace('/tuyen-dung/', ''))
  }, [location, setKeySearch])
  data.find(x => toSlug(x.industry.name) === location.pathname.replace('/tuyen-dung/', '')) && setCategory(data.find(x => toSlug(x.industry.name) === location.pathname.replace('/tuyen-dung/', '')).industry.name)
  return (
    <>
      {
        location.search ? <Details /> : <>
          <Header />
          <BannerNoAction />
          <div className="container pt-5 ">
            <div className="row flex-md-column flex-lg-row">
              <div className="col-sm-12 col-md-12 col-lg-4">
                <Tabs />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div
                  className={`d-flex justify-content-between flex-md-row flex-sm-column align-items-sm-start align-items-center ps-5 pe-4 py-3 ${styles.containerHeader}`}
                >
                  <div
                    className={`d-flex justify-content-start align-items-center ${styles.containerHeaderLeft}`}
                  >
                    <p className="me-3">
                      Có <strong>{dataHandle.length}</strong> việc làm
                    </p>
                    {category.replace("/tuyen-dung", "") !== "" && (
                      <div
                        className={`d-flex justify-content-start align-items-center ${styles.filterTag}`}
                      >
                        <p>{category}</p>
                        <CloseIcon
                          sx={{ color: "#000", fontSize: "14px" }}
                          onClick={() => { setCategory(""); history.push(`/tuyen-dung`) }}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className={`d-flex justify-content-start align-items-center mt-sm-3 mt-md-0 ${styles.containerHeaderRight}`}
                  >
                    <p className="me-3">Xếp theo</p>
                    <SelectPicker
                      onClean={() => {
                        setOptionSort("");
                      }}
                      onSelect={(e) => {
                        setOptionSort(e);
                      }}
                      placeholder="Độ ưu tiên"
                      data={sortOptions}
                      searchable={false}
                      style={{
                        boxShadow: `none`,
                        borderRadius: "0.75em",
                        transition:
                          "background-color 0.2s ease,box-shadow 0.2s ease",
                        width: 200,
                      }}
                      block
                    />
                  </div>
                </div>
                {dataHandle.map((ele, index) => {
                  return (
                    <LineInfor
                      name={ele.name}
                      address={ele.address}
                      salary={ele.salary}
                      number={ele.number}
                      deadline={ele.deadline}
                      status={ele.status}
                      link={ele.link}
                      key={index}
                      index={index}
                    />
                  );
                })}
              </div>
            </div>
          </div >
          <div className="mt-5 pt-5">
            <Footer />
          </div></>}
    </>
  );
}

export default Index;
