import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
import banner from "../../assets/image/bannerFAQ.jpg";
import styles from "./main.module.css"
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "@emotion/styled";

function Detail() {
  return (
    <>
      <Header />
      <BannerNoAction image={banner} />
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-4 col-md-12 col-sm-12 mb-lg-0 mb-sm-5">
            <div className={styles.info}>
              <ul className={styles.info__list}>
                <li className={styles.info__item}>
                  <p className={styles.info__label}>
                    Nơi làm việc:
                  </p>
                  <p className={styles.info__content}>
                    TP.HCM và 61 tỉnh thành khác
                  </p>
                </li>
                <li className={styles.info__item}>
                  <p className={styles.info__label}>
                    Hình thức:
                  </p>
                  <p className={styles.info__content}>
                    Công tác viên/Thời vụ/Bán thời gian
                  </p>
                </li>
                <li className={styles.info__item}>
                  <p className={styles.info__label}>
                    Bằng cấp:
                  </p>
                  <p className={styles.info__content}>
                    Không yêu cầu
                  </p>
                </li>
                <li className={styles.info__item}>
                  <p className={styles.info__label}>
                    Kinh nghiệm:
                  </p>
                  <p className={styles.info__content}>
                    Không cần kinh nghiệm
                  </p>
                </li>
                <li className={styles.info__item}>
                  <p className={styles.info__label}>
                    Thu nhập:
                  </p>
                  <p className={styles.info__content}>
                    Từ 7 - 10 triệu
                  </p>
                </li>
                <li className={styles.info__item}>
                  <p className={styles.info__label}>
                    Số lượng tuyển:
                  </p>
                  <p className={styles.info__content}>
                    2712 người
                  </p>
                </li>
                <li className={styles.info__item}>
                  <p className={styles.info__label}>
                    Hạn nhận hồ sơ:
                  </p>
                  <p className={styles.info__content}>
                    28/04/2022
                  </p>
                </li>
              </ul>
              <Button className="" style={{ backgroundColor: '#e66426', color: '#fff', width: '80%' }}>
                ỨNG TUYỂN
              </Button>
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12" style={{ lineHeight: '2', fontSize: '1rem' }}>
            <video
              src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2020/12/Eduma-Preview.mp4"
              autoPlay
              muted
              className={styles.vid}
              controls
            />
            <div className="mt-3">
              <h3 className={styles.title}>
                Mô tả công việc
              </h3>
              <p className={styles.desc}>
                Công việc của bạn sẽ linh hoạt giữa việc Tư vấn bán hàng cho KH và giao nhận lắp đặt sản phẩm cho KH khi cần, cụ thể:
              </p>
              <ul className={styles.content__list}>
                <li className={styles.content__item}>
                  Tư vấn các sản phẩm điện tử điện lạnh gia dụng
                </li>
                <li className={styles.content__item}>
                  Mang sản phẩm đến tận nhà cho Khách Hàng, hỗ trợ thông tin, hướng dẫn cách sử dụng sản phẩm.

                </li>
                <li className={styles.content__item}>
                  Hỗ trợ khách hàng thủ tục thanh toán và thu tiền hàng hoá.
                </li>
                <li className={styles.content__item}>
                  Tư vấn linh kiện phục vụ việc lắp đặt các thiết bị Điện Tử, Điện Lạnh cho Khách Hàng.
                </li>
                <li className={styles.content__item}>
                  Lắp đặt, bảo trì các thiết bị Điện Tử, Điện Lạnh theo yêu cầu Khách Hàng.
                </li>
                <li className={styles.content__item}>
                  Được đào tạo chuyên môn trước khi làm việc.
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <h3 className={styles.title}>
                Yêu cầu công việc
              </h3>
              <ul className={styles.content__list}>
                <li className={styles.content__item}>
                  Nam, tuổi từ 20 đến 30, sức khỏe tốt.
                </li>
                <li className={styles.content__item}>
                  Có xe máy, có Smartphone
                </li>
                <li className={styles.content__item}>
                  Nếu bạn chưa có kinh nghiệm, chỉ cần bạn yêu thích công việc này công ty sẽ đào tạo cho bạn
                </li>
                <li className={styles.content__item}>
                  Có tính kỷ luật, trách nhiệm và nghiêm túc trong công việc
                </li>
              </ul>
            </div>
            <div className="mt-3">
              <h3 className={styles.title}>
                Quyền lợi
              </h3>
              <ul className={styles.content__list}>
                <li className={styles.content__item}>
                  Môi trường làm việc thân thiện chuyên nghiệp
                </li>
                <li className={styles.content__item}>
                  Được hướng dẫn đào tạo từ Công ty và Quản lý trực tiếp
                </li>
                <li className={styles.content__item}>
                  Cơ hội học hỏi, tiếp xúc với quy trình làm việc chuyên nghiệp
                </li>
                <li className={styles.content__item}>
                  Cơ hội lên nhân viên chính thức
                </li>
              </ul>
            </div>
            <div className="my-3">
              <h3 className={styles.title}>
                Địa điểm làm việc
              </h3>
              <div className="my-3">
                <FormControl variant="filled" sx={{ minWidth: 138, border: 'none !important' }}>
                  <InputLabel >
                    Địa điểm
                  </InputLabel>
                  <Select >
                    <MenuItem value="hanoi">Hà Nội</MenuItem>
                    <MenuItem value="hochiminh">Hồ Chí Minh</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <input type="checkbox" value={true} style={{ width: 'auto' }} /> Địa điểm gần bạn nhất
              <ul className={`${styles.content__list} mt-2`} style={{ paddingLeft: 0 }}>
                <li className={styles.content__item}>
                  Tầng 2, Toà nhà N03T5, Khu Đoàn ngoại giao, P.Xuân Tảo, Q.Bắc Từ Liêm, TP.Hà Nội.
                </li>
                <li className={styles.content__item}>
                  Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp. Hồ Chí Minh.
                </li>
                <li className={styles.content__item}>
                  Thôn Lộc Hà, Xã Mai Lâm, Huyện Đông Anh, Hà Nội.
                </li>
                <li className={styles.content__item}>
                  Lô CN-27.1, KCN Thuận Thành II, An Bình, Thuận Thành, Bắc Ninh.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div >
      <Footer />
    </>
  )
}

export default Detail

