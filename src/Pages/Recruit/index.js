import React, { useState } from "react";
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
import { useLocation} from 'react-router-dom'
import Details from '../DetailJob/'
function Index() { 
  const [data, setData] = useState([]); 
  let location = useLocation();
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

  React.useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:15000/api/v1/recruitment`)
      .then((results) => results.json())
      .then((data) => {
          if (isMounted) {
        setData(data.data);
          }
      });
  }, [data]);
  // console.log(data)
  const [categoryJob, setCategoryJob] = useState("");
  const [optionSort, setOptionSort] = useState("");
  const [dataHandle, setDataHandle] = useState([]);

  React.useEffect(() => {
    setDataHandle(
      categoryJob === "" ? data : data.filter((o) => o.category === categoryJob)
    );
  }, [categoryJob, data]);

  React.useEffect(() => {
    if (optionSort !== "") {
      setDataHandle(sortByKey(dataHandle, optionSort));
    } else {
      setDataHandle(
        categoryJob === ""
          ? data
          : data.filter((o) => o.category === categoryJob)
      );
    }
    // eslint-disable-next-line
  }, [optionSort, data]);
  React.useEffect(() => {
    setCategoryJob(location.pathname.replace('/tuyen-dung/',''))  
  },[location]) 
  return (
    <>
    {
      location.search ? <Details /> :<> 
      <Header />
      <BannerNoAction image={banner} />
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-4">
            <Tabs />
          </div>
          <div className="col-sm-8">
            <div
              className={`d-flex justify-content-between align-items-center ps-5 pe-4 py-3 ${styles.containerHeader}`}
            >
              <div
                className={`d-flex justify-content-start align-items-center ${styles.containerHeaderLeft}`}
              >
                <p className="me-3">
                  Có <strong>{dataHandle.length}</strong> việc làm
                </p>
                {categoryJob.replace("/tuyen-dung/", "") !== "" && (
                  <div
                    className={`d-flex justify-content-start align-items-center ${styles.filterTag}`}
                  >
                    <p>{categoryJob}</p>
                    <CloseIcon
                      sx={{ color: "#000", fontSize: "14px" }}
                      onClick={() => setCategoryJob("")}
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
      </div>
      <div className="mt-5 pt-5">
        <Footer />
      </div></>}
    </>
  );
}

export default Index;
