import "../css/footer.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="Footer_rowClass">
          <div className="Footer_navLinks">
            <div className="Footer_navLinks_logo">
              <img
                src={require("../images/footer/footerLogo.png")}
                alt="wanted"
              />
            </div>
            <div className="Footer_navLinks_links">
              <a href="#">기업소개</a>
              <a href="#">이용약관</a>
              <a href="#">개인정보 처리방침</a>
              <a href="#">고객센터</a>
            </div>
          </div>
          <div className="Footer_SocialLinks">
            <a href="images/footer/instagram.png" alt="instagram">
              <img src={require("../images/footer/instagram.png")} alt="" />
            </a>
            <a href="https://www.youtube.com/channel/UC0tGZ6MqieGG2m5lA5PeQsw">
              <img
                src={require("../images/footer/youtube.png")}
                alt="youtube"
              />
            </a>
            <a href="https://www.facebook.com/wantedkr">
              <img
                src={require("../images/footer/facebook.png")}
                alt="facebook"
              />
            </a>
            <a href="https://blog.naver.com/wantedlab">
              <img src={require("../images/footer/nblog.png")} alt="blog" />
            </a>
            <a href="https://pf.kakao.com/_XqCIxl">
              <img
                src={require("../images/footer/kakaotalk.png")}
                alt="kakao"
              />
            </a>
            <a href="https://post.naver.com/my.nhn?memberNo=18284175">
              <img src={require("../images/footer/npost.png")} alt="post" />
            </a>
            <a href="https://apps.apple.com/kr/app/id1074569961">
              <img src={require("../images/footer/apple.png")} alt="apple" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.wanted.android.wanted">
              <img src={require("../images/footer/android.png")} alt="google" />
            </a>
          </div>
        </div>
        <div className="Footer_rowClass Footer_Boarder">
          <p className="Footer_CompanyInfo_Text">
            (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
            롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147
            <br />
            유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 |
            (국외) 서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 |
            02-539-7118
            <br />© Wantedlab, Inc.
          </p>
          <div className="Footer_LocaleSelect">
            <img
              src="https://static.wanted.co.kr/images/userweb/ico_KR.svg"
              alt="country flag KR"
            />
            <select className="Footer_LocaleSelect_box">
              <option value="KR">한국 (한국어)</option>
              <option value="JP">日本 (日本語)</option>
              <option value="WW">Worldwide (English)</option>
              <option value="SG">Singapore (English)</option>
            </select>
            <i className="Footer_LocaleSelect_arrow"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;