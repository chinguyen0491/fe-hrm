
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
            <div className="p-3 flex-column" style={{ boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.2)', position: 'sticky', top: '10%' }}>
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
                Yêu cầu công việc
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
            <div className="mt-5">
              <h3 className={styles.content__title}>
                Yêu cầu công việc
              </h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  Nam, tuổi từ 20 đến 30, sức khỏe tốt.
                </li>
                <li className={styles.item}>
                  Có xe máy, có Smartphone
                </li>
                <li className={styles.item}>
                  Nếu bạn chưa có kinh nghiệm, chỉ cần bạn yêu thích công việc này công ty sẽ đào tạo cho bạn
                </li>
                <li className={styles.item}>
                  Có tính kỷ luật, trách nhiệm và nghiêm túc trong công việc
                </li>
              </ul>
            </div>
            <div className="mt-5">
              <h3 className={styles.content__title}>
                Quyền lợi
              </h3>
              <ul className={styles.list}>
                <li className={styles.item}>
                  Môi trường làm việc thân thiện chuyên nghiệp
                </li>
                <li className={styles.item}>
                  Được hướng dẫn đào tạo từ Công ty và Quản lý trực tiếp
                </li>
                <li className={styles.item}>
                  Cơ hội học hỏi, tiếp xúc với quy trình làm việc chuyên nghiệp
                </li>
                <li className={styles.item}>
                  Cơ hội lên nhân viên chính thức
                </li>
              </ul>
            </div>
            <div className="my-5">
              <select className={styles.area__list} name="area" id="area">
                <option value="hanoi">Hà Nội</option>
                <option value="hochiminh">Hồ Chí Minh</option>
              </select>
              <div className={styles.check}>
                <input type="checkbox" className={styles.check} name="check" id="check" />
                <label htmlFor="check">Địa điểm gần bạn nhất</label>
              </div>
              <ul className={styles.list}>
                <li className={styles.item}>
                  Tầng 2, Toà nhà N03T5, Khu Đoàn ngoại giao, P.Xuân Tảo, Q.Bắc Từ Liêm, TP.Hà Nội.
                </li>
                <li className={styles.item}>
                  Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp. Hồ Chí Minh.
                </li>
                <li className={styles.item}>
                  Thôn Lộc Hà, Xã Mai Lâm, Huyện Đông Anh, Hà Nội.
                </li>
                <li className={styles.item}>
                  Lô CN-27.1, KCN Thuận Thành II, An Bình, Thuận Thành, Bắc Ninh.
                </li>
                <li className={styles.item}>
                  Lắp đặt, bảo trì các thiết bị Điện Tử, Điện Lạnh theo yêu cầu Khách Hàng.
                </li>
                <li className={styles.item}>
                  Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp. Hồ Chí Minh.
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

