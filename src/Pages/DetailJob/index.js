
import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BannerNoAction from "../../Components/Banner/BannerNoAction";
import banner from "../../assets/image/bannerFAQ.jpg";
import styles from "./main.module.css"

function Detail() {

  return (
    <>
      <Header />
      <BannerNoAction image={banner} />
      <div className={styles.body}>
        <div className={styles.container1}>
          <ul className={styles.ul1}>
            <li>
              <span className={styles.label}>
                Nơi làm việc:
              </span>
              <span className={styles.value}>
                <strong>TP.HCM và 61 tỉnh thành khác</strong>
              </span>
            </li>
            <li>
              <span className={styles.label}>
                Cấp bậc:
              </span>
              <span className={styles.value}>
                <strong>Cộng tác viên</strong>
              </span>
            </li>
            <li>
              <span className={styles.label}>
                Hình thức:
              </span>
              <span className={styles.value}>
                <strong>Công tác viên/Thời vụ/Bán thời gian</strong>
              </span>
            </li>
            <li>
              <span className={styles.label}>
                Bằng cấp:
              </span>
              <span className={styles.value}>
                <strong>Không yêu cầu</strong>
              </span>
            </li>
            <li>
              <span className={styles.label}>
                Kinh nghiệm:
              </span>
              <span className={styles.value}>
                <strong>Không cần kinh nghiệm</strong>
              </span>
            </li>
            <li>
              <span className={styles.label}>
                Thu nhập:
              </span>
              <span className={styles.value}>
                <strong>Từ 7 - 10 triệu</strong>
              </span>
            </li>
            <li>
              <span className={styles.label}>
                Số lượng tuyển:
              </span>
              <span className={styles.value}>
                <strong>2712 người</strong>
              </span>
            </li>
            <li>
              <span className={styles.label}>
                Hạn nhận hồ sơ:
              </span>
              <span className={styles.value}>
                <strong>28/04/2022</strong>
              </span>
            </li>
          </ul>
          <button className={styles.btn}>Ứng tuyển</button>
        </div>
        <div className={styles.container2}>
          <div className={styles.video}><video controls src="https://www.youtube.com/watch?v=9Xa5mmM0DZQ" autoPlay /></div>
          <div className={styles.head}>

            <p>
            </p><h2>Mô tả công việc</h2>
            <p />
            <p>Công việc của bạn sẽ linh hoạt giữa việc Tư vấn bán hàng cho KH và giao nhận lắp đặt sản phẩm cho KH
              khi
              cần,
              cụ thể:</p>
            <p>- Tư vấn các sản phẩm điện tử điện lạnh gia dụng</p>
            <p>- Mang sản phẩm đến tận nhà cho Khách Hàng, hỗ trợ thông tin, hướng dẫn cách sử dụng sản phẩm.</p>
            <p>- Hỗ trợ khách hàng thủ tục thanh toán và thu tiền hàng hoá.</p>
            <p>- Tư vấn linh kiện phục vụ việc lắp đặt các thiết bị Điện Tử, Điện Lạnh cho Khách Hàng.</p>
            <p>- Lắp đặt, bảo trì các thiết bị Điện Tử, Điện Lạnh theo yêu cầu Khách Hàng.</p>
            <p>- Được đào tạo chuyên môn trước khi làm việc.</p>
            <p>
            </p><h2>YÊU CẦU CÔNG VIỆC</h2>
            <p />
            <p>- Nam, tuổi từ 20 đến 30, sức khỏe tốt.</p>
            <p>- Có xe máy, có Smartphone</p>
            <p>- Nếu bạn chưa có kinh nghiệm, chỉ cần bạn yêu thích công việc này công ty sẽ đào tạo cho bạn</p>
            <p>- Có tính kỷ luật, trách nhiệm và nghiêm túc trong công việc</p>
            <p>
            </p><h2>QUYỀN LỢI</h2>
            <p />
            <p>- Môi trường làm việc thân thiện chuyên nghiệp</p>
            <p>- Được hướng dẫn đào tạo từ Công ty và Quản lý trực tiếp</p>
            <p>- Cơ hội học hỏi, tiếp xúc với quy trình làm việc chuyên nghiệp</p>
            <p>- Cơ hội lên nhân viên chính thức</p>
            <p>
            </p><h2>Địa điểm làm việc (2 thành phố lớn)</h2>
            <p />
          </div>
          <div className={styles.cbox}>
            <select name="cars" id="cars">
              <option value="HN">Hà Nội</option>
              <option value="HCM">TP.Hồ Chí Minh</option>
            </select>
          </div>
          <div className={styles.check}>
            <input type="checkbox" />
            <p>Địa điểm gần bạn nhất</p>
          </div>

          <div className={styles.loca}>
            <ul className={`${styles.loca} p-0`}>
              <li>
                <input type="radio" name="radio" />Tầng 2, Toà nhà N03T5, Khu Đoàn ngoại giao, P.Xuân Tảo, Q.Bắc Từ Liêm, TP.Hà
                Nội. <a href="#">Bản đồ</a>
              </li>
              <li>
                <input type="radio" name="radio" />Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp. Hồ Chí Minh. <a href="#">Bản
                  đồ</a>
              </li>
              <li>
                <input type="radio" name="radio" />Thôn Lộc Hà, Xã Mai Lâm, Huyện Đông Anh, Hà Nội. <a href="#">Bản đồ</a>
              </li>
              <li>
                <input type="radio" name="radio" />Lô CN-27.1, KCN Thuận Thành II, An Bình, Thuận Thành, Bắc Ninh. <a href="#">Bản
                  đồ</a>
              </li>
              <li>
                <input type="radio" name="radio" />Số 25 Nguyễn Lương Bằng, Tân Phú, Quận 7, Tp. Hồ Chí Minh. <a href="#">Bản
                  đồ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Detail

