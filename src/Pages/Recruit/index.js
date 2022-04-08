import React, { useState, useContext } from "react";
import styles from "./Recruit.module.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
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
      keySearch.trim() === '' ? data : data.filter((o) => {
        return toSlug(o.industry) === keySearch
      })
    );
  }, [keySearch, data]);

  React.useEffect(() => {
    if (optionSort !== "") {
      setDataHandle(sortByKey(dataHandle, optionSort));
    } else {
      setDataHandle(
        keySearch === "/tuyen-dung" || keySearch === ""
          ? data
          : data.filter((o) => toSlug(o.industry) === keySearch)
      );
    }
    // eslint-disable-next-line
  }, [optionSort, data, keySearch]);
  React.useEffect(() => {
    setKeySearch(location.pathname.replace('/tuyen-dung/', '').trim())
  }, [location, setKeySearch])
  data.find(x => toSlug(x.industry.name) === location.pathname.replace('/tuyen-dung/', '')) && setCategory(data.find(x => toSlug(x.industry.name) === location.pathname.replace('/tuyen-dung/', '')).industry.name)
  return (
    <>
      {
        location.search ? <Details /> : <>
          <Header />
          <BannerNoAction />
          <div className="container">
            <div className="row flex-md-column flex-lg-row mx-auto">
              <div className="col-sm-12 col-md-12 col-lg-4 pt-md-4 pt-sm-2 ">
                <Tabs />
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div
                  className={`d-flex flex-wrap  justify-content-between flex-md-row flex-sm-column-reverse align-items-md-center align-items-sm-start align-items-center ps-5 pe-4 py-3 ${styles.containerHeader}`}
                >
                  <div
                    className={`d-flex my-sm-3 justify-content-start align-items-center mb-3 ${styles.containerHeaderLeft}`}
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
                    className={`d-flex justify-content-start align-items-center ${styles.containerHeaderRight}`}
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
                <div className="mb-5">
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
                        id={ele.id}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div >
          <Footer />
        </>
      }
    </>
  );
}

export default Index;
