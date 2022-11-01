import { Link } from "react-router-dom";
import "../css/header.css";
// import LoginModal from "../component/loginModal";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="MainBar">
          <nav className="MainBar_nav">
            <div className="MainBar_nav_top">
              <button id="MainBar_nav_top_button" type="button">
                <img
                  id="MainBar_nav_top_buttonImg"
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
                  alt="hamberger menu"
                />
              </button>
              <Link to="/">
                <a href="/">
                  <img
                    id="MainBar_nav_top_logo"
                    src="https://www.wantedlab.com/img/logo.png"
                  />
                </a>
              </Link>
            </div>
            <ul className="MainBar_nav_menuBar">
              <li>
                <Link to="/DevRecruitMain">채용</Link>
              </li>
              <li>
                <a href="">이벤트</a>
              </li>
              <li>
                <a href="">직군별 연봉</a>
              </li>
              <li>
                <a href="">이력서</a>
              </li>
              <li>
                <a href="">커뮤니티</a>
              </li>
              <li>
                <a href="">프리랜서</a>
              </li>
              <li>
                <a href="">AI합격예측</a>
              </li>
              <span className="MainBar_nav_menuBar_indicator"></span>
            </ul>
            <ul className="MainBar_nav_aside">
              <li>
                <button className="MainBar_nav_search_button">
                  <img
                    className="SearchIcon"
                    src={require("../images/search.png")}
                    alt="search"
                  />
                </button>
              </li>
              <li id="LoginBtn" className="Login">
                <a className="LoginLink">회원가입/로그인</a>
              </li>
              <li className="PoratService_button">
                <a id="MainBar_nav_corporatService_button">기업 서비스</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

// LoginModal
function loginModalOn() {
  alert("click");
}

export default Header;
