
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
import banner from "../../assets/image/bannerFAQ.jpg";
import styles from "./Detail.module.css"

function Detail() {

  return (
    <>
      <Header />
      <BannerNoAction />
      <div className='container'>
        <div className="row mt-5">
          <div className='col-4'>
            <div className="p-3 flex-column" style={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)' }}>
              <ul className={styles.info}>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Nơi làm việc:
                  </span>
                  <span className={styles.value}>
                    <strong>TP.HCM và 61 tỉnh thành khác</strong>
                  </span>
                </li>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Cấp bậc:
                  </span>
                  <span className={styles.value}>
                    <strong>Cộng tác viên</strong>
                  </span>
                </li>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Hình thức:
                  </span>
                  <span className={styles.value}>
                    <strong>Công tác viên/Thời vụ/Bán thời gian</strong>
                  </span>
                </li>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Bằng cấp:
                  </span>
                  <span className={styles.value}>
                    <strong>Không yêu cầu</strong>
                  </span>
                </li>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Kinh nghiệm:
                  </span>
                  <span className={styles.value}>
                    <strong>Không cần kinh nghiệm</strong>
                  </span>
                </li>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Thu nhập:
                  </span>
                  <span className={styles.value}>
                    <strong>Từ 7 - 10 triệu</strong>
                  </span>
                </li>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Số lượng tuyển:
                  </span>
                  <span className={styles.value}>
                    <strong>2712 người</strong>
                  </span>
                </li>
                <li>
                  <span className={styles.label + ' col-5'}>
                    Hạn nhận hồ sơ:
                  </span>
                  <span className={styles.value}>
                    <strong>28/04/2022</strong>
                  </span>
                </li>
              </ul>
              <button className={styles.btn}>Ứng tuyển</button>
            </div>
          </div>
          <div className='col-8'>
            <div className={styles.video}>
              <video
                controls
                src="https://eduma.thimpress.com/demo-1/wp-content/uploads/sites/89/2020/12/Eduma-Preview.mp4"
                autoPlay
                muted />
            </div>
            <div className="mt-5">
              <h3 className={styles.content__title}>
                Mô tả công việc
              </h3>
              <p className={styles.cotent__desc}>
                Công việc của bạn sẽ linh hoạt giữa việc Tư vấn bán hàng cho KH và giao nhận lắp đặt sản phẩm cho KH khi cần, cụ thể:
              </p>
              <ul className={styles.list}>
                <li className={styles.item}>
                  Tư vấn các sản phẩm điện tử điện lạnh gia dụng
                </li>
                <li className={styles.item}>
                  Mang sản phẩm đến tận nhà cho Khách Hàng, hỗ trợ thông tin, hướng dẫn cách sử dụng sản phẩm.
                </li>
                <li className={styles.item}>
                  Hỗ trợ khách hàng thủ tục thanh toán và thu tiền hàng hoá.
                </li>
                <li className={styles.item}>
                  Tư vấn linh kiện phục vụ việc lắp đặt các thiết bị Điện Tử, Điện Lạnh cho Khách Hàng.
                </li>
                <li className={styles.item}>
                  Lắp đặt, bảo trì các thiết bị Điện Tử, Điện Lạnh theo yêu cầu Khách Hàng.
                </li>
                <li className={styles.item}>
                  Được đào tạo chuyên môn trước khi làm việc.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Detail

