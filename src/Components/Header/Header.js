import "./Header.css";
import styles from "./Header.module.css";
import CanvaMenu from "./CanvaMenu";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { getToken, getName, removeUserSession } from "../../Utils/Common";
function HeaderSeconds(props) {
  const token = getToken();
  const names = getName();
  const handleLogout = () => {
    <Link to="/dang-nhap"/>
    removeUserSession();
  };
  return (
    <>
      <header className="header-default">
        <nav className="navbar navbar-expand-lg">
          <div className="container-xl">
            {/* site logo */}
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item dropdown">
                  <NavLink
                    exact
                    activeClassName="active-navbar"
                    className="nav-link"
                    to="/"
                  >
                    Trang chủ
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink
                    activeClassName="active-navbar"
                    className="nav-link"
                    to="/tuyen-dung"
                  >
                    Tuyển dụng
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active-navbar"
                    className="nav-link"
                    to="/hoi-dap"
                  >
                    Hỏi đáp
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* header right section */}
            <div className="header-right">
              {/* social icons */}

              {/* header buttons */}
              <div className="header-buttons">
                <ul className="media-button" style={{ margin: "0px" }}>
                  <li className="d-block d-md-none">
                    <button
                      className="slideRightMenu burger-menu icon-button ms-2 float-end float-md-none"
                      aria-label="Burger"
                    >
                      <svg
                        fill="var(--main-color-content)"
                        height="20px"
                        viewBox="0 -53 384 384"
                        width="20px"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                        <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                        <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                      </svg>
                    </button>
                  </li>
                  <li className="d-block d-md-none">
                    <NavLink activeClassName="active-navbar" to="/dang-nhap">
                      <button
                        className="burger-menu icon-button ms-2 float-end float-md-none"
                        aria-label="Burger"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          stroke="var(--main-color-content)"
                          strokeWidth={2}
                          fill="var(--main-color-content)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="css-i6dzq1"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                      </button>
                    </NavLink>
                  </li>
                  <li className="d-none d-md-block">
                    {token ? (
                      <div className="position-relative">
                        Xin chào <span className={styles.uid}>{names}</span>
                        <ul
                          className={`${styles.toggleUser} overflow-hidden position-absolute top-100 end-0`}
                        >
                          <li>
                            <a>Thông tin cá nhân</a>
                          </li>
                          <li>
                            <Link to="/"
                              onClick={handleLogout}
                            ><b>Đăng xuất</b></Link>  
                          </li>
                        </ul>
                      </div>
                    ) : (
                      <NavLink
                        activeClassName="active-navbar"
                        to="/dang-nhap"
                        className="nav-link active-navbar"
                      >
                        Đăng nhập
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <CanvaMenu />
    </>
  );
}

export default HeaderSeconds;
