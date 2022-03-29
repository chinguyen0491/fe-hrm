import React,{useState} from "react";
import styles from './Recruit.module.css'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
import banner from "../../assets/image/banner-04.jpg";
import Tabs from "./Tabs";
import LineInfor from "./LineInfor";
import {  SelectPicker } from "rsuite";
import { sortByKey }from '../../extensions/sortKey'
function Index() {
  const [data] = useState([
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 271,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"marketing"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 271,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"nhan-su"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 271,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"dien"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 271,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"nhan-su"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 353,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"marketing"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 122,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"marketing"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 301,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"marketing"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 571,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"marketing"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 31,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"marketing"
    },
    {
      title: "Cộng Tác Viên Giao Hàng khối kinh doanh",
      address: "TP.HCM và 61 tỉnh thành khác",
      salary: "7-10",
      number: 171,
      deadline: "20/04/2022",
      status: "Hot",
      link: "/",
      category:"marketing"
    },
  ])
  const category = [
    {
      label:"Marketing",
      value:'marketing'
    },
    {
      label:"Nhân sự",
      value:'nhan-su'
    },
    {
      label:"Điện",
      value:'dien'
    },
  ]
  const sortOptions = [ 
    {
      label:"Độ ưu tiên",
      value:'status'
    },
    {
      label:"Lương",
      value:'salary'
    },
    {
      label:"Ngày hết hạn",
      value:'deadline'
    },
    {
      label:"Số lượng tuyển",
      value:'number'
    },
  ]
  const [categoryJob,setCategoryJob] = useState('')
  const [optionSort,setOptionSort] = useState('')
  const [dataHandle, setDataHandle] = useState([])
  React.useEffect(() => {
    setDataHandle(categoryJob === '' ? data : data.filter(o => o.category === categoryJob))
  },[categoryJob,data])
  React.useEffect(() => {
    if(optionSort !== '') {
      setDataHandle(sortByKey(dataHandle,optionSort))
    }
    else {
      setDataHandle(categoryJob === '' ? data : data.filter(o => o.category === categoryJob))
    }
  },[optionSort,data])
  return (
    <>
      <Header />
      <BannerNoAction image={banner} />
      <div className="container pt-5">
        <div className="row">
          <div className="col-sm-4">
            <Tabs />
          </div>
          <div className="col-sm-8">
            <div className={`d-flex justify-content-between align-items-center ps-5 pe-4 py-3 ${styles.containerHeader}`}>
              <div className={`d-flex justify-content-start align-items-center ${styles.containerHeaderLeft}`}>
                <p className='me-3'>Có <strong>{dataHandle.length}</strong> việc làm</p>
                <SelectPicker
              onClean={() => {setCategoryJob("")}}
              onSelect={(e) => {setCategoryJob(e)}}
            placeholder="Chọn Việc làm"
            data={category}searchable={false}
            style={{
              boxShadow: `none`,
              borderRadius: "0.75em",
              transition: "background-color 0.2s ease,box-shadow 0.2s ease",
              width: 200,
            }} 
            block
          />
              </div>
              <div className={`d-flex justify-content-start align-items-center ${styles.containerHeaderRight}`}>
                <p  className='me-3'>Xếp theo</p>
                <SelectPicker
              onClean={() => {setOptionSort("")}}
              onSelect={(e) => {setOptionSort(e)}}
            placeholder="Độ ưu tiên"
            data={sortOptions}searchable={false}
            style={{
              boxShadow: `none`,
              borderRadius: "0.75em",
              transition: "background-color 0.2s ease,box-shadow 0.2s ease",
              width: 200,
            }} 
            block
          />
              </div>
            </div>
            {
            dataHandle.map((ele, index) => {
              return (
                <LineInfor 
                  title={ele.title}
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
      <div className='mt-5 pt-5'>
      <Footer/></div>
    </>
  );
}

export default Index;
