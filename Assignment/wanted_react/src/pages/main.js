import "../css/main.css";
import Header from "../component/header";
import LoginModal from "../component/loginModal";

function Main() {
  return (
    <>
      <LoginModal />
      <div className="Page">
        <Header />
        <div className="TopBanner">
          <div className="TopBanner_slider">
            <button className="TopBanner_arrow Left_arrow">
              <img
                className="TopBanner_arrowIcon"
                src={require("../images/chevron-left.png")}
                alt=""
              />
            </button>
            <button className="TopBanner_arrow Right_arrow">
              <img
                className="TopBanner_arrowIcon"
                src={require("../images/chevron-right.png")}
                alt=""
              />
            </button>
            <div className="TopBanner_list_wrapper">
              <div className="TopBanner_list_wrapper_container">
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1791%2F19d8e5bf.jpg&w=1060&q=100"
                        alt="우리 회사를 소개합니다."
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2 className="TopBanner_list_contents_information_h2">
                      우리 회사를 소개합니다.
                    </h2>
                    <h3>'회사'에 대한 정보, 원티드가 찾아드릴게요!</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <svg
                            className="TopBanner_list_contents_information_Svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1835%2F487d8bb0.jpg&w=1060&q=100"
                        alt="Startup Lead Group Coaching"
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2>Startup Lead Group Coaching</h2>
                    <h3>팀장을 위한 그룹코칭</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <svg
                            className="TopBanner_list_contents_information_Svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1843%2F6e4ca95f.jpg&w=1060&q=100"
                        alt="원티드긱스 &lt;개발자의 달&gt;"
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2>원티드긱스 &lt;개발자의 달&gt;</h2>
                    <h3>프리랜서 개발자를 위한 이벤트</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <span className="">
                            <svg
                              className="TopBanner_list_contents_information_Svg"
                              viewBox="0 0 18 18"
                            >
                              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1844%2F3d999be3.jpg&w=1060&q=100"
                        alt="[FREE] GDSC Job Fair Live"
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2>[FREE] GDSC Job Fair Live</h2>
                    <h3>국내 최고 스타트업 채용소식을 볼 수 있는 기회!</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <svg
                            className="TopBanner_list_contents_information_Svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1852%2F41073f1a.jpg&w=1060&q=100"
                        alt="단 4주! 백엔드 신입딱지 떼기"
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2>단 4주! 백엔드 신입딱지 떼기</h2>
                    <h3>프리온보딩 백엔드 코스</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <svg
                            className="TopBanner_list_contents_information_Svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1851%2F62d57330.jpg&w=1060&q=100"
                        alt="기업이 원하는 프론트 개발자 되기"
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2>기업이 원하는 프론트 개발자 되기</h2>
                    <h3>프리온보딩 프론트엔드 코스</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <svg
                            className="TopBanner_list_contents_information_Svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1826%2F849c1703.jpg&w=1060&q=100"
                        alt="롯데헬스케어에 세로들어와!"
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2>롯데헬스케어에 세로들어와!</h2>
                    <h3>적극 채용 중인 포지션을 영상으로 확인하세요!</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <svg
                            className="TopBanner_list_contents_information_Svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="TopBanner_list_contents">
                  <div className="TopBanner_list_contents_Img_Container">
                    <a href="#">
                      <img
                        className="TopBanner_list_contents_Img"
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1825%2Fb93ecf4e.jpg&w=1060&q=100"
                        alt="마키나락스에 세로들어와!"
                      />
                    </a>
                  </div>
                  <div className="TopBanner_list_contents_information">
                    <h2>마키나락스에 세로들어와!</h2>
                    <h3>적극 채용 중인 포지션을 영상으로 확인하세요!</h3>
                    <hr className="divider" />
                    <div className="TopBanner_list_contents_link">
                      <a href="#">
                        <span>
                          바로가기
                          <svg
                            className="TopBanner_list_contents_information_Svg"
                            viewBox="0 0 18 18"
                          >
                            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Main">
          <div className="CareerContents">
            <div className="CareerContents_Wrapper">
              <div className="CareerContents_Title_Wrapper">
                <div className="CareerContents_Title">
                  <h2 className="CareerContents_Title_Str">
                    나에게 필요한 커리어 인사이트
                  </h2>
                  <button className="QuestionButton">
                    <svg
                      width="22"
                      height="22"
                      className=""
                      viewBox="0 0 17 17"
                    >
                      <defs>
                        <filter id="bfoh3u0w3a">
                          <feColorMatrix
                            in="SourceGraphic"
                            values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
                          ></feColorMatrix>
                        </filter>
                      </defs>
                      <g fill="none" fillRule="evenodd">
                        <g>
                          <g>
                            <g transform="translate(-1080 -374) translate(1080 374)">
                              <g>
                                <path
                                  stroke="#999"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.2"
                                  d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                                  transform="translate(1 1)"
                                ></path>
                                <path
                                  fill="#999"
                                  d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                                  transform="translate(1 1) rotate(-180 7.053 10.408)"
                                ></path>
                                <path
                                  stroke="#999"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="1.2"
                                  d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                                  transform="translate(1 1)"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="CareerContents_CategoryListSlide">
                <div className="CareerContents_Category_arrow CareerContents_Category_arrow_left">
                  <button className="CareerContents_Category_arrow_left_button">
                    <span>
                      <svg
                        className="CareerContents_Category_arrowIcon"
                        viewBox="0 0 18 18"
                      >
                        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="CareerContents_Category_arrow CareerContents_Category_arrow_right">
                  <button className="CareerContents_Category_arrow_right_button">
                    <span>
                      <svg
                        className="CareerContents_Category_arrowIcon"
                        viewBox="0 0 18 18"
                      >
                        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="CareerContents_Category_arrow CareerContents_Category_Expand">
                  <button
                    className="CareerContents_Category_arrow_Expand_button"
                    type="button"
                  >
                    <svg width="16" height="3" viewBox="0 0 16 3">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="CareerContents_CategoryList">
                  <div className="CareerContents_CategoryName">
                    라이프스타일
                  </div>
                  <div className="CareerContents_CategoryName">회사생활</div>
                  <div className="CareerContents_CategoryName">인간관계</div>
                  <div className="CareerContents_CategoryName">커리어고민</div>
                  <div className="CareerContents_CategoryName">조직문화</div>
                  <div className="CareerContents_CategoryName">IT/기술</div>
                  <div className="CareerContents_CategoryName">리더쉽</div>
                  <div className="CareerContents_CategoryName">취업/이직</div>
                  <div className="CareerContents_CategoryName">브랜딩</div>
                  <div className="CareerContents_CategoryName">MD</div>
                  <div className="CareerContents_CategoryName">UX/UI</div>
                  <div className="CareerContents_CategoryName">경영/전략</div>
                  <div className="CareerContents_CategoryName">데이터</div>
                  <div className="CareerContents_CategoryName">HR</div>
                  <div className="CareerContents_CategoryName">디자인</div>
                  <div className="CareerContents_CategoryName">서비스기획</div>
                  <div className="CareerContents_CategoryName">콘텐츠 제작</div>
                  <div className="CareerContents_CategoryName">개발</div>
                  <div className="CareerContents_CategoryName">노무</div>
                  <div className="CareerContents_CategoryName">마케팅</div>
                </div>
              </div>
              <div className="CareerContents_List_Wrapper">
                <ul className="CareerContents_List">
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2Fpi7%2Fimage%2FOgGWYAYT_mxRAJw8Gm8gUMaPKGY.JPG&w=500&q=75"
                          alt="고양이 손님이 매일 아침 노크하는 집"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        고양이 손님이 매일 아침 노크하는 집
                      </p>
                      <p className="CareerContentCard_CareerContentCard_Text">
                        1. 고양이란 무엇인가 대학생 시절 홀로 자취를 하는 친척형
                        네 집에 놀러 간 적이 있다. 모란시장 근처에 살던 형네
                        집에 놀러 가서 게임도 하고, 영화도 보자고 해서 신나는
                        발걸음을 옮겼던 기억이 아직도 생생하다. 다세대 주택
                        원룸에 살던 형이 친히 지하철역까지 마중을 나와 나를
                        집까지 안내해주었다. 방문을 열자 지금껏 강아지만
                        키워봤던 나에게 다소 낯
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                          alt="brunch"
                        />
                        <p>Chanbin Park</p>
                      </div>
                    </a>
                  </li>
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220311%2F5%2F24292894.jpg&w=500&q=75"
                          alt="바쁘다 바빠 현대 사회에서 정신없이 굴러가는 사이드 프로젝트 일대기"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        바쁘다 바빠 현대 사회에서 정신없이 굴러가는 사이드
                        프로젝트 일대기
                      </p>
                      <p className="CareerContentCard_CareerContentCard_Text">
                        바쁘다 바빠 현대사회에서도 사이드 프로젝트로 시작해
                        지금까지 큰 사랑을 받고 있는 길거리 음식 위치 공유
                        서비스 가슴속 3천원. 사이드 프로젝트 가슴속 3천원은
                        어떻게 태어나 지금까지 어떻게 자라왔는지 경험담을
                        알려드립니다. 또한 서비스 운영 경험을 통해 느낀 사이드
                        프로젝트를 할 때 유의할 점, 진행하는 방식들에 대해
                        소개해 드립니다.
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                          alt="wanted"
                        />
                        <p>가슴속 3천원 / 프립, 유현식</p>
                      </div>
                    </a>
                  </li>
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQguH1xrYr6g%2Fhqdefault.jpg%3Fsqp%3D-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg%3D%3D%26rs%3DAOn4CLCdFggJsOglUPj0yqROm4ELlkr9IQ&w=500&q=75"
                          alt="?경제적자유 이루는 첫단계, 부의시스템 만드는법 부자되는법 - 김미경의 따독 '언니의 따끈따끈한 독설'"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        경제적자유 이루는 첫단계, 부의시스템 만드는법 부자되는법
                        - 김미경의 따독 '언니의 따끈따끈한 독설'
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted-public.s3.ap-northeast-2.amazonaws.com%2Fyoutube_opengraph.png&w=60&q=90"
                          alt="youtube"
                        />
                        <p>MKTV 김미경TV</p>
                      </div>
                    </a>
                  </li>
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211013%2F12%2F86479127.jpg&w=500&q=75"
                          alt="주니어 PM의 사이드 프로젝트로 성장기"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        주니어 PM의 사이드 프로젝트로 성장기
                      </p>
                      <p className="CareerContentCard_CareerContentCard_Text">
                        다른 사람들의 커리어 시작은 어땠을까? 글쓰기 사이드
                        프로젝트를 하면서 PM의 커리어를 시작하게 된 정수현 님의
                        경험담을 들려드립니다.
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                          alt="wanted"
                        />
                        <p>정수현</p>
                      </div>
                    </a>
                  </li>
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F38EK%2Fimage%2Fkxkwkcr0dhG5bCpRou18EGXnboU.jpg&w=500&q=75"
                          alt="나는 나답게 살기로 했다"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        나는 나답게 살기로 했다
                      </p>
                      <p className="CareerContentCard_CareerContentCard_Text">
                        발전의 원동력인 열등감 "인간은 평생 동안 자신의 열등감을
                        극복하여 자기 자신에게 보상하는 방향으로 살아간다.
                        따라서 열등감은 보다 완전한 존재로 나아가게 하는
                        에너지로 작용한다." 아들러의 이 말로 보면 열등감은 더
                        나은 내가 될 수 있는 원동력인 셈이다. 열등감이
                        느껴진다면 그건 부족함을 채우기 위한 확실한 신호다.
                        거기서 얻어야 할 건 그 감정을 솔직
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                          alt="brunch"
                        />
                        <p>Grace</p>
                      </div>
                    </a>
                  </li>
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F79q%2Fimage%2FqJPbzuhnXYFb7_OsOXe6FUymZD8.JPG&w=500&q=75"
                          alt="어느 스타트업과 프리워커2인의 페르소나 마케팅"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        어느 스타트업과 프리워커2인의 페르소나 마케팅
                      </p>
                      <p className="CareerContentCard_CareerContentCard_Text">
                        7월 한 달간 집중했던 프로젝트가 끝났다. 프리워커로서
                        수진이와 그리고 AI 홈트레이닝 서비스 윌로와 함께 진행한
                        프로젝트 #아노아캔. 이 글은 프로젝트가 모두 마무리된
                        시점에 쓰는 회고 글이다. 우리의 프로젝트가 누군가에게는
                        좋은 레퍼런스가 되길! 윌로와의 만남 윌로와의 프로젝트는
                        "우리가 만나면 어떤 일을 해볼 수 있을까?" 함께
                        고민해보는데서 출발했
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
                          alt="brunch"
                        />
                        <p>알로하융</p>
                      </div>
                    </a>
                  </li>
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20211020%2F7%2F05264548.jpg&w=500&q=75"
                          alt="춤이 아니라 맞춤법으로 틱톡 채널을 키운 아나운서 - 유아나 유미라"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        춤이 아니라 맞춤법으로 틱톡 채널을 키운 아나운서 -
                        유아나 유미라
                      </p>
                      <p className="CareerContentCard_CareerContentCard_Text">
                        # 유아나 채널 소개# 아나운서로서 틱톡을 시작하게 된
                        계기와 과정 “왜 아나운서가 틱톡을 할까?”# 춤이 아니라
                        맞춤법으로 틱톡을 성장시킬 수 있었던 비법은?# 퍼스널
                        브랜딩, 틱톡으로 어떻게 가능한가?# 나의 업(Job)으로
                        콘텐츠를 업(Up)하는 노하우 – 업과 콘텐츠를 일치시키기는
                        비법 # 숏폼이 어렵다면, 가장 잘 아는 것부터 시작해보길
                        권하는 이유# 숏폼 콘텐츠 기획에서 가장 중요한 한 가지를
                        꼽는다면?
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                          alt="wanted"
                        />
                        <p>유아나</p>
                      </div>
                    </a>
                  </li>
                  <li className="CareerContentCard_CareerContentCard">
                    <a href="#">
                      <div className="CareerContentCard_CareerContentCard_Thumbnail">
                        <img
                          className="CareerContentCard_CareerContentCard_Thumbnail_Img"
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220705%2F0%2F90735534.jpg&w=500&q=75"
                          alt="Talk: 당신이 꼭 들어야 할 소프트웨어 엔지니어 성장 스토리"
                        />
                      </div>
                      <p className="CareerContentCard_CareerContentCard_Title">
                        Talk: 당신이 꼭 들어야 할 소프트웨어 엔지니어 성장
                        스토리
                      </p>
                      <p className="CareerContentCard_CareerContentCard_Text">
                        소프트웨어 엔지니어의 커리어와 성장을 고민하는 분들을
                        위해 구글 최초 한국인 엔지니어 이준영님을
                        모셨습니다.여러분의 고민은 무엇인가요?
                      </p>
                      <div className="CareerContentCard_Info">
                        <img
                          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
                          alt="wanted"
                        />
                        <p>야놀자 이준영</p>
                      </div>
                    </a>
                  </li>
                </ul>
                <div className="CareerContentList_More">
                  <button className="CareerContentList_More_Button">
                    <span className="CareerContentList_More_Button_Name">
                      더 많은 콘텐츠 보기
                      <span className="CareerContentList_More_Button_Icon">
                        <svg
                          className="SvgIcon_SvgIcon_svg"
                          viewBox="0 0 19 19"
                        >
                          <path
                            d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="CareerContentsListMore"></div>
            </div>
          </div>

          <div className="CreatorBanner_Wrapper">
            <div className="CreatorBanner">
              <div className="CreatorBanner_Container">
                <div className="CreatorBanner_Text">
                  <p>즐겨보는 크리에이터의 글도 추천하고 싶다면?</p>
                  <a href="#">
                    <span>크리에이터 추천하기 {">"}</span>
                  </a>
                </div>
                <div className="CreatorBanner_Img">
                  <img src={require("../images/creator.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
          <hr className="divider" />
          <div className="Article_Wrapper">
            <div className="Article_Header">
              <button>
                <span>
                  <svg className="Article_Header_SvgIcon" viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
              <div className="Article_Title">
                <h2>3분만에 읽는 Wanted+ 아티클</h2>
                <a href="#">아티클 전체보기 &rang;</a>
              </div>
              <button>
                <span>
                  <svg className="Article_Header_SvgIcon" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="Article_Contents_Wrapper">
              <ul className="Article_Contents_List">
                <li className="Article_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2430%2Fd892e109.jpg&w=800&q=75"
                        alt="IP 확장 그리고 글로벌 진출로 세계 선구자가 되다"
                      />
                    </div>
                    <div className="Article_Contents_Info">
                      <p className="Article_Contents_Titlte">
                        IP 확장 그리고 글로벌 진출로 세계 선구자가 되다
                      </p>
                      <p>#미디어 #콘텐츠 제작 회사생활</p>
                    </div>
                  </a>
                </li>
                <li className="Article_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2429%2Ffca14c2b.jpg&w=800&q=75"
                        alt="LG전자ㅣ애플에서 8년은 일하는 방법을 가르쳐 준 시간"
                      />
                    </div>
                    <div className="Article_Contents_Info">
                      <p className="Article_Contents_Titlte">
                        LG전자ㅣ애플에서 8년은 일하는 방법을 가르쳐 준 시간
                      </p>
                      <p>#개발 #IT/기술 #데이터</p>
                    </div>
                  </a>
                </li>
                <li className="Article_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2432%2Fbf1903f2.jpg&w=800&q=75"
                        alt="선선한 가을 날씨에 어울릴 아티클 추천 리스트"
                      />
                    </div>
                    <div className="Article_Contents_Info">
                      <p className="Article_Contents_Titlte">
                        선선한 가을 날씨에 어울릴 아티클 추천 리스트
                      </p>
                      <p>#마케팅∙광고 #커리어고민 #시리즈</p>
                    </div>
                  </a>
                </li>
                <li className="Article_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75"
                        alt="리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀"
                      />
                    </div>
                    <div className="Article_Contents_Info">
                      <p className="Article_Contents_Titlte">
                        리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀
                      </p>
                      <p>#개발 #IT/기술 #취업/이직</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="divider" />

          <div className="VOD_Wrapper">
            <div className="VOD_Header">
              <button>
                <span>
                  <svg className="VOD_Header_SvgIcon" viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
              <div className="VOD_Title">
                <h2>직장인을 위한 Wanted+ VOD</h2>
                <a href="#">VOD 전체보기 {">"}</a>
              </div>
              <button>
                <span>
                  <svg className="VOD_Header_SvgIcon" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="VOD_Contents_Wrapper">
              <ul className="VOD_Contents_List">
                <li className="VOD_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210413%2F2%2F39565343.jpg&w=800&q=75"
                        alt="포트폴리오를 부탁해"
                      />
                    </div>
                    <div className="VOD_Contents_Info">
                      <p>전{")"}원티드랩 최보명</p>
                      <p className="VOD_Contents_Title">포트폴리오를 부탁해</p>
                      <p>[무료] 포트폴리오를 부탁해 by 원티드</p>
                    </div>
                  </a>
                </li>
                <li className="VOD_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210224%2F8%2F90123633.jpg&w=800&q=75"
                        alt="Wanted Talk Engineering #1: 테스트 코드와 배포 시스템 - 서버 배포 방식"
                      />
                    </div>
                    <div className="VOD_Contents_Info">
                      <p>
                        Wanted Talk Engineering #1: 테스트 코드와 배포 시스템 -
                        서버 배포 방식
                      </p>
                      <p className="VOD_Contents_Title">
                        Wanted Talk Engineering #1: 테스트 코드와 배포 시스템 -
                        서버 배포 방식
                      </p>
                      <p>
                        (무료) 테스트 코드와 배포 시스템 : Wanted Talk
                        Engineering #1
                      </p>
                    </div>
                  </a>
                </li>
                <li className="VOD_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210512%2F2%2F32385576.jpg&w=800&q=75"
                        alt="선선한 가을 날씨에 어울릴 아티클 추천 리스트"
                      />
                    </div>
                    <div className="VOD_Contents_Info">
                      <p>애프터모멘트 박창선</p>
                      <p className="VOD_Contents_Title">
                        터지는 콘텐츠는 이렇게 만듭니다 Part 3 : 위트와
                        무리수레벨 조절하기 - 박창선
                      </p>
                      <p>터지는 콘텐츠는 이렇게 만듭니다 : Wanted How To</p>
                    </div>
                  </a>
                </li>
                <li className="VOD_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210618%2F2%2F34753914.jpg&w=800&q=75"
                        alt="리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI 팀"
                      />
                    </div>
                    <div className="VOD_Contents_Info">
                      <p>노무법인 예담HR컨설팅 장내석</p>
                      <p className="VOD_Contents_Title">회사를 구하는 인사</p>
                      <p>회사를 구하는 인사</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="LineBanner_Wrapper">
            <a href="#">
              <div className="LineBanner_Text">
                <span>
                  직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. {">"}
                  <em>👀</em>
                </span>
                <span></span>
              </div>
            </a>
          </div>

          <div className="Event_Wrapper">
            <div className="Event_Header">
              <button>
                <span>
                  <svg className="Event_Header_SvgIcon" viewBox="0 0 18 18">
                    <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                  </svg>
                </span>
              </button>
              <div className="Event_Title">
                <h2>커리어 성장을 위한 맞춤 이벤트</h2>
                <a href="#">이벤트 전체보기 {">"}</a>
              </div>
              <button>
                <span>
                  <svg className="Event_Header_SvgIcon" viewBox="0 0 18 18">
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </button>
            </div>
            <div className="Event_Contents_Wrapper">
              <ul className="Event_Contents_List">
                <li className="Event_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2431%2Ff6fb0b1c.jpg&w=1200&q=100"
                        alt="[무료] 이력서, 포트폴리오, 면접을 부탁해 by 원티드"
                      />
                    </div>
                    <div className="Event_Contents_Info">
                      <h3>
                        [무료] 이력서, 포트폴리오, 면접을 부탁해 by 원티드
                      </h3>
                      <p>2022.10.31 (월)</p>
                    </div>
                  </a>
                </li>
                <li className="Event_Contents_Card">
                  <a href="#">
                    <div>
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2421%2F7065bb13.jpg&w=1200&q=100"
                        alt="10월 원티드살롱(평가보상편)"
                      />
                    </div>
                    <div className="Event_Contents_Info">
                      <h3>10월 원티드살롱(평가보상편)</h3>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="SubscribeBanner_Wrapper">
          <div className="SubscribeBanner_Container">
            <div className="SubscribeBanner_Text">
              <div className="SubscribeBanner_Title">
                <div>
                  <svg className="SubscribeBanner_logo" viewBox="0 0 160 31">
                    <path
                      d="M0.140625 10.0156L6.11719 29H11.4258L15.5391 16.5547L19.6172 29H24.9609L30.9375 10.0156H25.6289L22.1133 21.8984L18.2461 10.0156H12.7969L8.92969 21.8984L5.41406 10.0156H0.140625ZM46.5469 29H51.6094V10.0156H46.5469V11.9844C45.1758 10.2441 43.1895 9.3125 40.6406 9.3125C35.2969 9.3125 31.4121 13.6016 31.4297 19.5078C31.4121 25.4141 35.2969 29.7031 40.6406 29.7031C43.1895 29.7031 45.1758 28.7891 46.5469 27.0664V29ZM36.4922 19.5078C36.4746 16.2559 38.6016 13.8828 41.5547 13.8828C44.543 13.8828 46.5117 16.0977 46.5469 19.5078C46.5117 22.918 44.543 25.1328 41.5547 25.1328C38.6016 25.1328 36.4746 22.7598 36.4922 19.5078ZM60.0469 29V17.75C60.082 15.7285 61.6289 14.0234 63.7383 14.0234C66.041 14.0234 67.2188 15.5527 67.2188 18.1719V29H72.2812V16.7656C72.2812 12.125 69.6445 9.3125 65.5312 9.3125C63.2285 9.3125 61.3125 10.4023 60.0469 12.1953V10.0156H54.9844V29H60.0469ZM86.6602 10.0156H82.8633V3.72266L77.8008 5.76172V10.0156H74.3906V14.5156H77.8008V22.7422C77.8008 28.1035 81.3867 30.2305 86.6602 29.1758V24.5352C83.7949 25.0801 82.8633 24.1836 82.8633 22.7422V14.5156H86.6602V10.0156ZM89.1211 19.5078C89.1211 25.4141 93.2871 29.7031 99 29.7031C103.078 29.7031 106.418 27.5762 108.035 23.832L103.148 22.6367C102.34 24.2012 100.881 25.1328 99 25.1328C96.4863 25.1328 94.7285 23.4805 94.2891 20.8438H108.809C108.844 20.4043 108.879 19.9648 108.879 19.5078C108.861 13.6016 104.713 9.3125 99 9.3125C93.2871 9.3125 89.1211 13.6016 89.1211 19.5078ZM94.5176 17.3281C94.834 15.377 96.4688 13.8828 99 13.8828C101.496 13.8828 103.113 15.377 103.465 17.3281H94.5176ZM130.746 29V0.804688L125.684 2.84375V11.9844C124.312 10.2441 122.326 9.3125 119.777 9.3125C114.434 9.3125 110.549 13.6016 110.566 19.5078C110.549 25.4141 114.434 29.7031 119.777 29.7031C122.326 29.7031 124.312 28.7891 125.684 27.0664V29H130.746ZM115.629 19.5078C115.611 16.2559 117.738 13.8828 120.691 13.8828C123.68 13.8828 125.648 16.0977 125.684 19.5078C125.648 22.918 123.68 25.1328 120.691 25.1328C117.738 25.1328 115.611 22.7598 115.629 19.5078ZM148.148 16.4141H141.363V20.3164H148.148V27.3828H152.191V20.3164H159.012V16.4141H152.191V9.41797H148.148V16.4141Z"
                      fill="#000000"
                    ></path>
                  </svg>
                </div>
                <p>구독해야 하는 이유</p>
              </div>
              <p>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</p>
              <a className="SubscribeBanner_Button" href="#">
                <button id="SubscribeButton">
                  <img
                    className="SubscribeButtonImg"
                    src={require("../images/check.png")}
                    alt=""
                  />
                  첫 구독 0원 신청하기
                </button>
              </a>
            </div>
            <div className="SubscribeBanner_item">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Ffirst-wantedplus-subscribe.png&w=800&q=90"
                alt="wantedplus"
              />
            </div>
          </div>
        </div>

        <div className="RecruitInfo_Wrapper">
          <div className="RecruitInfo_Header">
            <div className="RecruitInfo_Title">
              <h2>채용 정보를 찾고 계셨나요?</h2>
            </div>
          </div>
          <div className="RecruitInfo_Main">
            <div className="RecruitmentQuikMenu">
              <a className="RecruitmentQuikMenu_Icon" href="#">
                <span>
                  <svg className="RecruitmentQuikMenu_Svg" viewBox="0 0 32 32">
                    <path d="M27.96 29.374a1 1 0 1 0 1.414-1.414l-8.667-8.667-.338-.294a1 1 0 0 0-1.357.05 9 9 0 1 1 2.24-3.676 1 1 0 1 0 1.909.6 11.01 11.01 0 0 0 .506-3.306c0-6.076-4.925-11-11-11-6.076 0-11 4.924-11 11 0 6.074 4.925 11 11 11 2.615 0 5.087-.918 7.04-2.549l8.253 8.256z"></path>
                  </svg>
                </span>
              </a>
              <a className="RecruitmentQuikMenu_Button" href="#">
                채용공고
                <span className="RecruitmentQuikMenu_Button_Icon">
                  <svg
                    className="RecruitmentQuikMenu_Button_Svg"
                    viewBox="0 0 18 18"
                  >
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="RecruitmentQuikMenu">
              <a className="RecruitmentQuikMenu_Icon" href="#">
                <span>
                  <svg className="RecruitmentQuikMenu_Svg" viewBox="0 0 32 32">
                    <path d="M18.812 14.36c-.722.917-1.172 1.905-1.188 2.959-.023 1.658.907 2.901 2.613 3.605l.132.044c3.985 1.027 6.615 3.38 6.615 5.748L27 28.118c0 .03-.222.215-.4.215H5.33c-.157 0-.314-.14-.314-.203L5 26.705c0-2.283 2.384-4.493 6.185-5.564.349-.079.896-.273 1.458-.616.885-.54 1.504-1.297 1.654-2.301a1 1 0 1 0-1.978-.296c-.05.333-.293.63-.719.89-.345.21-.703.338-.909.385C6.075 20.503 3 23.353 3 26.716l.016 1.426c0 1.214 1.103 2.191 2.313 2.191h21.272c1.213-.002 2.399-.995 2.399-2.226l-.016-1.403c0-3.432-3.313-6.414-8.044-7.654-.944-.404-1.327-.932-1.316-1.702.008-.541.284-1.147.76-1.75.31-.394.622-.691.81-.84l.1-.092c1.409-1.474 2.319-3.428 2.319-5.333 0-4.169-3.488-7.666-7.648-7.666-4.158 0-7.647 3.498-7.647 7.666 0 1.795.506 3.33 1.55 4.628a1 1 0 1 0 1.558-1.255c-.748-.93-1.108-2.02-1.108-3.373 0-3.065 2.595-5.666 5.647-5.666 3.054 0 5.648 2.6 5.648 5.666 0 1.329-.67 2.786-1.722 3.906a7.46 7.46 0 0 0-1.079 1.122z"></path>
                  </svg>
                </span>
              </a>
              <a className="RecruitmentQuikMenu_Button" href="#">
                내 프로필
                <span className="RecruitmentQuikMenu_Button_Icon">
                  <svg
                    className="RecruitmentQuikMenu_Button_Svg"
                    viewBox="0 0 18 18"
                  >
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="RecruitmentQuikMenu">
              <a className="RecruitmentQuikMenu_Icon" href="#">
                <span>
                  <svg className="RecruitmentQuikMenu_Svg" viewBox="0 0 32 32">
                    <path d="M11.667 28.667a1 1 0 0 1-1-1v-7h-2v7a1 1 0 0 1-1 1H2.333a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v4.333h11a1 1 0 0 1 .993.884l.007.116v12a1 1 0 1 1-2 0v-11H18v15.334h11a1 1 0 1 1 0 2H11.667zM16 6H3.333v20.667h3.334v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7H16V6zm5 12.333c.736 0 1.333.597 1.333 1.334V21a1.333 1.333 0 1 1-2.666 0v-1.333c0-.737.597-1.334 1.333-1.334zM21 13c.736 0 1.333.597 1.333 1.333v1.334a1.333 1.333 0 1 1-2.666 0v-1.334c0-.736.597-1.333 1.333-1.333zM8 13a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8zm0-5.333a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.667a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1H8z"></path>
                  </svg>
                </span>
              </a>
              <a className="RecruitmentQuikMenu_Button" href="">
                매치업
                <span className="RecruitmentQuikMenu_Button_Icon">
                  <svg
                    className="RecruitmentQuikMenu_Button_Svg"
                    viewBox="0 0 18 18"
                  >
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="RecruitmentQuikMenu">
              <a className="RecruitmentQuikMenu_Icon" href="#">
                <span>
                  <svg className="RecruitmentQuikMenu_Svg" viewBox="0 0 32 32">
                    <path d="M10.667 21.667a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2l-13.805.001a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138a3.67 3.67 0 0 1 3.529-2.667zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333zm10.666-11.334A3.67 3.67 0 0 1 24.862 15H28a1 1 0 0 1 0 2h-3.138a3.67 3.67 0 0 1-7.057 0H4a1 1 0 0 1 0-2h13.805a3.67 3.67 0 0 1 3.528-2.667zm0 2a1.668 1.668 0 0 0 0 3.334 1.668 1.668 0 0 0 0-3.334zM10.667 3a3.67 3.67 0 0 1 3.528 2.666H28a1 1 0 0 1 0 2H14.195a3.67 3.67 0 0 1-7.057 0H4a1 1 0 1 1 0-2h3.138A3.67 3.67 0 0 1 10.667 3zm0 2a1.668 1.668 0 0 0 0 3.333 1.668 1.668 0 0 0 0-3.333z"></path>
                  </svg>
                </span>
              </a>
              <a className="RecruitmentQuikMenu_Button" href="#">
                직군별 연봉
                <span className="RecruitmentQuikMenu_Button_Icon">
                  <svg
                    className="RecruitmentQuikMenu_Button_Svg"
                    viewBox="0 0 18 18"
                  >
                    <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

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
                <img
                  src={require("../images/footer/android.png")}
                  alt="google"
                />
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
      </div>

      <script type="text/javascript" src="scripts/main.js"></script>
    </>
  );
}

export default Main;
