
import React, { useContext, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
import styles from "./main.module.css"
import Info from "./Info";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { RecruitContext } from '../../hook/ContextRecruit'
import ContentItem from "./ContentItem";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Detail() {
  const id = useLocation().search.replace('?', '')
  const [mainData, setMainData] = useState()
  const { data } = useContext(RecruitContext)
  useEffect(() => {
    const findData = data.find(val => {
      return +id === val.name.id
    })
    if (findData) {
      setMainData(findData)
      console.log(findData);
    }
  }, [data])
  return (
    <>
      <Header />
      <BannerNoAction />
      <div className='container'>
        <div className="row mt-5">
          <div className='col-4'>
            {mainData && <Info
              mainData={mainData}
            />}
          </div>
          {
            mainData && <div className='col-8' style={{ fontSize: '1rem', lineHeight: '2rem' }}>
              <div className={styles.video}>
                <video
                  controls
                  src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2020/12/Eduma-Preview.mp4"
                  autoPlay
                  muted />
              </div>
              {
                mainData.description &&
                <ContentItem
                  title={'Mô tả công việc'}
                  desc={mainData.description}
                />
              }
              {
                mainData.require &&
                <ContentItem
                  title={'Yêu cầu công việc'}
                  desc={mainData.require}
                />
              }
              {
                mainData.exp.length > 0 &&
                <ContentItem
                  title={'Kinh nghiệm'}
                  content={mainData.exp.map(val => val.value)}
                />
              }
              {
                mainData.welfare.length > 1 &&
                <ContentItem
                  title={'Quyền lợi'}
                  content={mainData.welfare.map(val => val.name)}
                />
              }
              <div className="mt-3">
                <FormControl>
                  <InputLabel>
                    Địa chỉ
                  </InputLabel>
                  <Select style={{minWidth: 200, margin: '2rem 0'}}>
                    <MenuItem value={'hanoi'}>Hà nội</MenuItem>
                    <MenuItem value={'hochiminh'}>Hà nội</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Detail

